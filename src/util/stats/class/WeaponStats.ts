import Weapon from '../../../types/game_data/weapon';
import { calcAverageOfMinMax, calcMinMaxByDistance } from '../commonCalculator';

class WeaponStats {
  private readonly data: Weapon;

  constructor(data: Weapon) {
    this.data = data;
  }

  get id() {
    return this.data.id;
  }

  get name() {
    return this.data.name;
  }

  get damage() {
    return this.data.damage;
  }

  // get deflectionDamage() {
  //   const { damage, deflection:{deflectionDamageMultiplier} } = this.data;
  //   return damage * deflectionDamageMultiplier;
  // }

  get range() {
    const { min, max } = this.data.range;
    return { min, max };
  }

  get distance() {
    return this.data.range.distance;
  }

  get penetration() {
    return this.data.penetration;
  }

  get accuracy() {
    return this.data.accuracy;
  }

  get firstFireTime() {
    const {
      fire: { windUp },
      aim: { readyAimTime, aimTimeMultiplier },
    } = this.data;
    return calcMinMaxByDistance(readyAimTime, aimTimeMultiplier, windUp);
  }

  private get fireAimTime() {
    const { fireAimTime, aimTimeMultiplier } = this.data.aim;
    return calcMinMaxByDistance(fireAimTime, aimTimeMultiplier);
  }

  private get burstTime() {
    const { duration, durationMultiplier } = this.data.burst;
    return calcMinMaxByDistance(duration, durationMultiplier);
  }

  private get rateOfFire() {
    const { rateOfFire, rateOfFireMultiplier } = this.data.burst;
    return calcMinMaxByDistance(rateOfFire, rateOfFireMultiplier);
  }

  private get cooldown() {
    const { duration, durationMultiplier } = this.data.cooldown;
    return calcMinMaxByDistance(duration, durationMultiplier);
  }

  private get reloadTime() {
    const { duration, durationMultiplier } = this.data.reload;
    return calcMinMaxByDistance(duration, durationMultiplier);
  }

  get fireCycleTime() {
    const fireAimTimeAverage = {
      near: calcAverageOfMinMax(this.fireAimTime.near),
      mid: calcAverageOfMinMax(this.fireAimTime.mid),
      far: calcAverageOfMinMax(this.fireAimTime.far),
    };

    const burstTimeAverage = {
      near: calcAverageOfMinMax(this.burstTime.near),
      mid: calcAverageOfMinMax(this.burstTime.mid),
      far: calcAverageOfMinMax(this.burstTime.far),
    };

    const cooldownAverage = {
      near: calcAverageOfMinMax(this.cooldown.near),
      mid: calcAverageOfMinMax(this.cooldown.mid),
      far: calcAverageOfMinMax(this.cooldown.far),
    };

    const reloadTimeAverage = {
      near: calcAverageOfMinMax(this.reloadTime.near),
      mid: calcAverageOfMinMax(this.reloadTime.mid),
      far: calcAverageOfMinMax(this.reloadTime.far),
    };

    const frequencyAverage = calcAverageOfMinMax(this.data.reload.frequency);
    return {
      near:
        (fireAimTimeAverage.near + burstTimeAverage.near + this.data.fire.windUp + this.data.fire.windDown) *
          (frequencyAverage + 1) +
        cooldownAverage.near * (frequencyAverage + 1) +
        reloadTimeAverage.near,
      mid:
        (fireAimTimeAverage.mid + burstTimeAverage.mid + this.data.fire.windUp + this.data.fire.windDown) *
          (frequencyAverage + 1) +
        cooldownAverage.mid * (frequencyAverage + 1) +
        reloadTimeAverage.mid,
      far:
        (fireAimTimeAverage.far + burstTimeAverage.far + this.data.fire.windUp + this.data.fire.windDown) *
          (frequencyAverage + 1) +
        cooldownAverage.far * (frequencyAverage + 1) +
        reloadTimeAverage.far,
    };
  }

  private get shotsPerFireCycle() {
    const { canBurst } = this.data.burst;
    const burstTimeAverage = {
      near: calcAverageOfMinMax(this.burstTime.near),
      mid: calcAverageOfMinMax(this.burstTime.mid),
      far: calcAverageOfMinMax(this.burstTime.far),
    };

    const rateOfFireAverage = {
      near: calcAverageOfMinMax(this.rateOfFire.near),
      mid: calcAverageOfMinMax(this.rateOfFire.mid),
      far: calcAverageOfMinMax(this.rateOfFire.far),
    };

    const shotsPerFire = {
      near: canBurst ? burstTimeAverage.near * rateOfFireAverage.near : 1,
      mid: canBurst ? burstTimeAverage.mid * rateOfFireAverage.mid : 1,
      far: canBurst ? burstTimeAverage.far * rateOfFireAverage.far : 1,
    };

    const frequencyAverage = calcAverageOfMinMax(this.data.reload.frequency);

    return {
      near: shotsPerFire.near * (frequencyAverage + 1),
      mid: shotsPerFire.mid * (frequencyAverage + 1),
      far: shotsPerFire.far * (frequencyAverage + 1),
    };
  }

  private get damagePerFireCycle() {
    const { accuracy, damage } = this.data;
    const damageAverage = calcAverageOfMinMax(damage);
    return {
      near: this.shotsPerFireCycle.near * accuracy.near * damageAverage,
      mid: this.shotsPerFireCycle.mid * accuracy.mid * damageAverage,
      far: this.shotsPerFireCycle.far * accuracy.far * damageAverage,
    };
  }

  get dps() {
    return {
      near: this.damagePerFireCycle.near / this.fireCycleTime.near,
      mid: this.damagePerFireCycle.mid / this.fireCycleTime.mid,
      far: this.damagePerFireCycle.far / this.fireCycleTime.far,
    };
  }

  get rpm() {
    return {
      near: (this.shotsPerFireCycle.near / this.fireCycleTime.near) * 60,
      mid: (this.shotsPerFireCycle.mid / this.fireCycleTime.mid) * 60,
      far: (this.shotsPerFireCycle.far / this.fireCycleTime.far) * 60,
    };
  }

  get moving() {
    return this.data.moving;
  }

  // get areaEffect() {
  //   const { areaInfo, distance, damageMultiplier, maxMember } = this.data.areaEffect;

  //   return {
  //     areaInfo: {
  //       areaType: areaInfo.areaType,
  //       radius: areaInfo.areaType === 'circle' ? areaInfo.radius : undefined,
  //       length: areaInfo.areaType === 'rectangle' ? areaInfo.lenght : undefined,
  //       width: areaInfo.areaType === 'rectangle' ? areaInfo.width : undefined,
  //     },
  //     distance: {
  //       near: areaInfo.areaType !== 'none' ? distance.near : undefined,
  //       mid: areaInfo.areaType !== 'none' ? distance.mid : undefined,
  //       far: areaInfo.areaType !== 'none' ? distance.far : undefined,
  //     },
  //     maxMember: areaInfo.areaType !== 'none' ? maxMember : undefined,
  //     damage: {
  //       near: areaInfo.areaType !== 'none' ? this.data.damage * damageMultiplier.near : undefined,
  //       mid: areaInfo.areaType !== 'none' ? this.data.damage * damageMultiplier.mid : undefined,
  //       far: areaInfo.areaType !== 'none' ? this.data.damage * damageMultiplier.far : undefined,
  //     },
  //   };
  // }

  get scatter() {
    return this.data.scatter;
  }

  get settingTime() {
    return {
      setup: this.data.setup,
      teardown: this.data.teardown,
    };
  }

  get suppression() {
    return this.data.suppression;
  }

  get tracking() {
    return this.data.tracking;
  }
}

export default WeaponStats;
