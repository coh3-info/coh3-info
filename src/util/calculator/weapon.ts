import { WeaponStats } from '../../types/stats/weaponStats';

interface MinMax {
  min: number;
  max: number;
}

interface Distance {
  near: number;
  mid: number;
  far: number;
}

const modifyStat = (base: number, multiplier: number) => {
  return base * multiplier;
};

const calcAverage = (...nums: number[]) => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
};

const calcAccuracy = (accuracy: number, targetSize?: number) => {
  const hitChance = accuracy * (targetSize ?? 1);
  if (hitChance > 1) return 1;
  return hitChance;
};

/** 관통확률을 구합니다.
 *
 * 관통확률은 무기의 관통력을 Entity의 장갑으로 나누어 구합니다. 결과값이 0.03(3%) 미만이라면 관통확률은 0입니다.
 */
const calcPenetrationChance = (penetration: number, armor: number) => {
  const penetrationChance = penetration / armor;

  if (penetrationChance < 0.03) return 0;
  else if (penetrationChance > 1) return 1;
  return penetrationChance;
};

const calcOneFireTime = (aimTime: number, windUp: number, burstDuration: number, windDown: number) => {
  return aimTime + windUp + burstDuration + windDown;
};

const calcOneFireTimeWithCooldown = (onefireTime: number, cooldown: number) => {
  return onefireTime + cooldown;
};

const calcOneFireTimeWithReload = (onefireTime: number, reloadDuration: number) => {
  return onefireTime + reloadDuration;
};

const calcFireCycleTime = (onefireTimeWithCooldown: number, onefireTimeWithReload: number, frequency: number) => {
  return onefireTimeWithCooldown * frequency + onefireTimeWithReload;
};

/** 한번 격발시 총을 발사하는 횟수.
 *
 * 연사가능한 무기가 아니라면 한번 격발시 한번만 발사합니다.
 */
const calcRoundsPerFire = (canBurst: boolean, rateOfFire: number, burstDuration: number) => {
  return canBurst ? burstDuration * rateOfFire : 1;
};

/** 격발 사이클당 총을 발사하는 횟수를 계산합니다.*/
const calcRoundsPerCycle = (roundsPerFire: number, frequency: number) => {
  return roundsPerFire * (frequency + 1);
};

const calcRPM = (fireCycleTime: number, roundsPerCycle: number) => {
  return (60 / fireCycleTime) * roundsPerCycle;
};

const calcDPS = (damage: number, accuracy: number, rpm: number) => {
  return (damage * accuracy * rpm) / 60;
};

/**한 구간의 거리에 따른 값들을 반환합니다.
 *
 * 예를 들어 무기 데이터인 garand_rifleman_us의 근거리에서 중거리 사이의 명중률을 구한다 가정하겠습니다.
 *
 * garand_rifleman_us의 근거리와 중거리 정의는 다음과 같습니다.
 *
 * range/distance/near = 7,
 * range/distance/mid = 25
 *
 * 근거리와 중거리에서의 명중률은 다음과 같습니다.
 *
 * accuracy/near = 0.55,
 * accuracy/mid = 0.5
 *
 * 이는 상대와의 거리가 7만큼 떨어져있다면 명중률은 0.55이고 멀어질수록 점점 줄어들어 거리 25에서 0.5의 명중률을 가진다는 것을 의미합니다.
 *
 * 거리 7부터 25까지의 명중률은 다음과 같습니다.
 *
 * 0.55, 0.547, 0.544, 0.542, 0.539 ... 0.503, 0.5
 *
 * 함수는 startDistance ~ endDistance - 1 까지의 값들을 배열로 반환합니다.
 *
 * 위의 예시대로 라면 [0.55, 0.547, 0.544 ... 0.503]을 반환합니다.
 */
export const getReadingsByDistanceOfOneSection = (
  startDistance: number,
  endDistance: number,
  startValue: number,
  endValue: number
) => {
  const multipliers: number[] = [];
  for (let i = startDistance; i < endDistance; i++) {
    const currentMultiplier =
      startValue - ((startValue - endValue) / (endDistance - startDistance)) * (i - startDistance);
    multipliers.push(currentMultiplier);
  }
  return multipliers;
};

export const getReadingsByDistance = (range: MinMax, distance: Distance, multiplier: Distance) => {
  const nearDistance = distance.near >= 0 ? distance.near : range.min;
  const midDistance = distance.mid >= 0 ? distance.mid : Math.round((range.min + range.max) / 2);
  const farDistance = distance.far >= 0 ? distance.far : range.max;

  const fromZeroToMin = getReadingsByDistanceOfOneSection(0, range.min, NaN, NaN);
  const fromMinToNear = getReadingsByDistanceOfOneSection(range.min, nearDistance, multiplier.near, multiplier.near);
  const fromNearToMid = getReadingsByDistanceOfOneSection(nearDistance, midDistance, multiplier.near, multiplier.mid);
  const fromMidToFar = getReadingsByDistanceOfOneSection(midDistance, farDistance, multiplier.mid, multiplier.far);
  const fromFarToMax = getReadingsByDistanceOfOneSection(farDistance, range.max + 1, multiplier.far, multiplier.far);
  return [...fromZeroToMin, ...fromMinToNear, ...fromNearToMid, ...fromMidToFar, ...fromFarToMax];
};

export const getAccuracyReadingsByDistance = (weapon: WeaponStats, targetSize?: number) => {
  const accuracyReadings = getReadingsByDistance(weapon.range, weapon.range.distance, weapon.accuracy);
  return accuracyReadings.map((accuracy) => calcAccuracy(accuracy, targetSize));
};

export const getPenetrationReadingsByDistance = (weapon: WeaponStats) => {
  const penetrationReadings = getReadingsByDistance(weapon.range, weapon.range.distance, weapon.penetration);
  return penetrationReadings;
};

export const getPenetrationChanceReadings = (weapon: WeaponStats, targetArmor: number) => {
  const penetrationReadings = getPenetrationReadingsByDistance(weapon);
  const penetrationChanceReadings = penetrationReadings.map((penetration) => {
    return calcPenetrationChance(penetration, targetArmor);
  });

  return penetrationChanceReadings;
};

/**거리에 따른 조준시간을 가져옵니다. */
const getAimTimeReadingsByDitance = (weapon: WeaponStats) => {
  const {
    range,
    aim: { fireAimTime, aimTimeMultiplier },
  } = weapon;
  const aimTimeAverage = calcAverage(fireAimTime.min, fireAimTime.max);
  const aimTimeMultipliers = getReadingsByDistance(range, range.distance, aimTimeMultiplier);
  const aimTimeReadings = aimTimeMultipliers.map((multiplier) => modifyStat(aimTimeAverage, multiplier));

  return aimTimeReadings;
};

const getBurstDurationReadingsByDitance = (weapon: WeaponStats) => {
  const {
    range,
    burst: { canBurst, duration, durationMultiplier },
  } = weapon;
  const burstDurationAverage = calcAverage(duration.min, duration.max);
  const burstDurationMultipliers = getReadingsByDistance(range, range.distance, durationMultiplier);
  const burstDurationReadings = burstDurationMultipliers.map((multiplier) =>
    modifyStat(burstDurationAverage, canBurst ? multiplier : 0)
  );

  return burstDurationReadings;
};

const getRateOfFireReadingsByDitance = (weapon: WeaponStats) => {
  const {
    range,
    burst: { canBurst, rateOfFire, rateOfFireMultiplier },
  } = weapon;
  const rateOfFireAverage = calcAverage(rateOfFire.min, rateOfFire.max);
  const rateOfFireMultipliers = getReadingsByDistance(range, range.distance, rateOfFireMultiplier);
  const rateOfFireReadings = rateOfFireMultipliers.map((multiplier) =>
    modifyStat(rateOfFireAverage, canBurst ? multiplier : 0)
  );

  return rateOfFireReadings;
};

const getCooldownReadingsByDistance = (weapon: WeaponStats) => {
  const {
    range,
    cooldown: { duration, durationMultiplier },
  } = weapon;
  const cooldownAverage = calcAverage(duration.min, duration.max);
  const cooldownMultipliers = getReadingsByDistance(range, range.distance, durationMultiplier);
  const cooldownReadings = cooldownMultipliers.map((multiplier) => modifyStat(cooldownAverage, multiplier));

  return cooldownReadings;
};

const getReloadDurationReadingsByDistance = (weapon: WeaponStats) => {
  const {
    range,
    reload: { duration, durationMultiplier },
  } = weapon;
  const reloadDurationAverage = calcAverage(duration.min, duration.max);
  const reloadDurationMultipliers = getReadingsByDistance(range, range.distance, durationMultiplier);
  const reloadDurationReadings = reloadDurationMultipliers.map((multiplier) =>
    modifyStat(reloadDurationAverage, multiplier)
  );

  return reloadDurationReadings;
};

const getOneFireTimeReadingsByDistance = (weapon: WeaponStats) => {
  const {
    fire: { windUp, windDown },
  } = weapon;
  const aimTimeReadings = getAimTimeReadingsByDitance(weapon);
  const burstDurationReadings = getBurstDurationReadingsByDitance(weapon);

  const oneFireTimeReadings = aimTimeReadings.map((aimTime, i) => {
    const burstDuration = burstDurationReadings[i];
    return calcOneFireTime(aimTime, windUp, burstDuration, windDown);
  });

  return oneFireTimeReadings;
};

const getOneFireTimeWithCooldownReadingsByDistance = (weapon: WeaponStats) => {
  const oneFireTimeReadings = getOneFireTimeReadingsByDistance(weapon);
  const cooldownReadings = getCooldownReadingsByDistance(weapon);

  const oneFireTimeWithCooldownRedings = oneFireTimeReadings.map((oneFireTime, i) => {
    const cooldown = cooldownReadings[i];
    return calcOneFireTimeWithCooldown(oneFireTime, cooldown);
  });

  return oneFireTimeWithCooldownRedings;
};

const getOneFireTimeWithReloadReadingsByDistance = (weapon: WeaponStats) => {
  const oneFireTimeReadings = getOneFireTimeReadingsByDistance(weapon);
  const reloadDurationReadings = getReloadDurationReadingsByDistance(weapon);

  const oneFireTimeWithReloadReadings = oneFireTimeReadings.map((oneFireTime, i) => {
    const reloadDuration = reloadDurationReadings[i];
    return calcOneFireTimeWithReload(oneFireTime, reloadDuration);
  });

  return oneFireTimeWithReloadReadings;
};

const getFireCycleTimeReadingsByDistance = (weapon: WeaponStats) => {
  const { frequency } = weapon.reload;
  const frequencyAverage = calcAverage(frequency.min, frequency.max);
  const oneFireTimeWithCooldownReadings = getOneFireTimeWithCooldownReadingsByDistance(weapon);
  const oneFireTimeWithReloadReadings = getOneFireTimeWithReloadReadingsByDistance(weapon);

  const fireCycleTimeReadings = oneFireTimeWithCooldownReadings.map((oneFireTimeWithCooldown, i) => {
    const oneFireTimeWithReload = oneFireTimeWithReloadReadings[i];
    return calcFireCycleTime(oneFireTimeWithCooldown, oneFireTimeWithReload, frequencyAverage);
  });

  return fireCycleTimeReadings;
};

const getRoundsPerFireReadingsByDistance = (weapon: WeaponStats) => {
  const { canBurst } = weapon.burst;

  const burstDurationReadings = getBurstDurationReadingsByDitance(weapon);
  const ratesOfFire = getRateOfFireReadingsByDitance(weapon);
  const roundsPerFireReadings = burstDurationReadings.map((burstDuration, i) => {
    const rateOfFire = ratesOfFire[i];
    return calcRoundsPerFire(canBurst, rateOfFire, burstDuration);
  });

  return roundsPerFireReadings;
};

const getRoundsPerCycleReadingsByDistance = (weapon: WeaponStats) => {
  const { frequency } = weapon.reload;

  const frequencyAverage = calcAverage(frequency.min, frequency.max);

  const roundsPerFireReadings = getRoundsPerFireReadingsByDistance(weapon);

  const roundsPerCycleReadings = roundsPerFireReadings.map((roundsPerFire, i) => {
    return calcRoundsPerCycle(roundsPerFire, frequencyAverage);
  });

  return roundsPerCycleReadings;
};

export const getRPMReadingsByDistance = (weapon: WeaponStats) => {
  const fireCycleTimeReadings = getFireCycleTimeReadingsByDistance(weapon);
  const roundsPerCycleReadings = getRoundsPerCycleReadingsByDistance(weapon);

  const rpmReadings = fireCycleTimeReadings.map((fireCycleTime, i) => {
    const roundPerCycle = roundsPerCycleReadings[i];

    return calcRPM(fireCycleTime, roundPerCycle);
  });

  return rpmReadings;
};

export const getDPSReadingsByDistance = (weapon: WeaponStats) => {
  const { damage } = weapon;

  const damageAverage = calcAverage(damage.min, damage.max);

  const accuracyReadings = getAccuracyReadingsByDistance(weapon);
  const rpmReadings = getRPMReadingsByDistance(weapon);

  const dpsReadings = rpmReadings.map((rpm, i) => {
    const accuracy = accuracyReadings[i];

    return calcDPS(damageAverage, accuracy, rpm);
  });

  return dpsReadings;
};
