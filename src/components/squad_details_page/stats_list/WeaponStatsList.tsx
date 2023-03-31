import StatsList from './StatList';
import type { Stat, StatGroup } from './stat';
// import WeaponStats from '../../../util/stats/class/WeaponStats';

const WeaponStatsList = () => {
  // const leftWeapon
  // const rightWeapon

  const statList1: (Stat | StatGroup)[] = [
    // { name: '공격력', leftValue: leftWeapon.damage, rightValue: rightWeapon.damage },
    // { name: '비관통 공격력', leftValue: leftWeapon.deflectionDamage, rightValue: rightWeapon.deflectionDamage },
    // {
    //   name: '사거리',
    //   leftValue: [leftWeapon.range.min, leftWeapon.range.max],
    //   rightValue: [rightWeapon.range.min, leftWeapon.range.max],
    //   separator: '~',
    // },
    // {
    //   name: '거리 정의',
    //   stats: [
    //     { name: '근거리', leftValue: leftWeapon.distance.near, rightValue: rightWeapon.distance.near },
    //     { name: '중거리', leftValue: leftWeapon.distance.mid, rightValue: rightWeapon.distance.mid },
    //     { name: '원거리', leftValue: leftWeapon.distance.far, rightValue: rightWeapon.distance.far },
    //   ],
    // },
    // {
    //   name: '관통력',
    //   stats: [
    //     { name: '근거리', leftValue: leftWeapon.penetration.near, rightValue: rightWeapon.penetration.near },
    //     { name: '중거리', leftValue: leftWeapon.penetration.mid, rightValue: rightWeapon.penetration.mid },
    //     { name: '원거리', leftValue: leftWeapon.penetration.far, rightValue: rightWeapon.penetration.far },
    //   ],
    // },
    // {
    //   name: '명중률',
    //   stats: [
    //     {
    //       name: '근거리',
    //       leftValue: leftWeapon.accuracy.near,
    //       rightValue: rightWeapon.accuracy.near,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '중거리',
    //       leftValue: leftWeapon.accuracy.mid,
    //       rightValue: rightWeapon.accuracy.mid,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '원거리',
    //       leftValue: leftWeapon.accuracy.far,
    //       rightValue: rightWeapon.accuracy.far,
    //       unit: 'percentage',
    //     },
    //   ],
    // },
    // {
    //   name: '첫 격발 속도(초)',
    //   stats: [
    //     {
    //       name: '근거리',
    //       leftValue: [leftWeapon.firstFireTime.near.min, leftWeapon.firstFireTime.near.max],
    //       rightValue: [rightWeapon.firstFireTime.near.min, rightWeapon.firstFireTime.near.max],
    //       separator: '~',
    //     },
    //     {
    //       name: '중거리',
    //       leftValue: [leftWeapon.firstFireTime.mid.min, leftWeapon.firstFireTime.mid.max],
    //       rightValue: [rightWeapon.firstFireTime.mid.min, rightWeapon.firstFireTime.mid.max],
    //       separator: '~',
    //     },
    //     {
    //       name: '원거리',
    //       leftValue: [leftWeapon.firstFireTime.far.min, leftWeapon.firstFireTime.far.max],
    //       rightValue: [rightWeapon.firstFireTime.far.min, rightWeapon.firstFireTime.far.max],
    //       separator: '~',
    //     },
    //   ],
    // },
    // {
    //   name: 'DPS',
    //   stats: [
    //     { name: '근거리', leftValue: leftWeapon.dps.near, rightValue: rightWeapon.dps.near, decimalPlaces: 2 },
    //     { name: '중거리', leftValue: leftWeapon.dps.mid, rightValue: rightWeapon.dps.mid, decimalPlaces: 2 },
    //     { name: '원거리', leftValue: leftWeapon.dps.far, rightValue: rightWeapon.dps.far, decimalPlaces: 2 },
    //   ],
    // },
    // {
    //   name: 'RPM',
    //   stats: [
    //     { name: '근거리', leftValue: leftWeapon.rpm.near, rightValue: rightWeapon.rpm.near, decimalPlaces: 2 },
    //     { name: '중거리', leftValue: leftWeapon.rpm.mid, rightValue: rightWeapon.rpm.mid, decimalPlaces: 2 },
    //     { name: '원거리', leftValue: leftWeapon.rpm.far, rightValue: rightWeapon.rpm.far, decimalPlaces: 2 },
    //   ],
    // },
    // {
    //   name: '이동사격',
    //   stats: [
    //     {
    //       name: '이동사격 가능 여부',
    //       leftValue: leftWeapon.moving.canFireWhileMoving,
    //       rightValue: rightWeapon.moving.canFireWhileMoving,
    //     },
    //     {
    //       name: '명중률 보정',
    //       leftValue: leftWeapon.moving.accuracyMultiplier,
    //       rightValue: rightWeapon.moving.accuracyMultiplier,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '쿨다운 보정',
    //       leftValue: leftWeapon.moving.cooldownMultiplier,
    //       rightValue: rightWeapon.moving.cooldownMultiplier,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '연사시간 보정',
    //       leftValue: leftWeapon.moving.burstMultiplier,
    //       rightValue: rightWeapon.moving.burstMultiplier,
    //       unit: 'percentage',
    //     },
    //   ],
    // },
  ];

  const statList2: (Stat | StatGroup)[] = [
    // {
    //   name: '범위 정보',
    //   stats: [
    //     {
    //       name: '범위 형태',
    //       leftValue: leftWeapon.areaEffect.areaInfo.areaType,
    //       rightValue: rightWeapon.areaEffect.areaInfo.areaType,
    //     },
    //     {
    //       name: '범위 반경',
    //       leftValue: leftWeapon.areaEffect.areaInfo.radius,
    //       rightValue: rightWeapon.areaEffect.areaInfo.radius,
    //     },
    //     {
    //       name: '범위 길이',
    //       leftValue: leftWeapon.areaEffect.areaInfo.length,
    //       rightValue: rightWeapon.areaEffect.areaInfo.length,
    //     },
    //     {
    //       name: '범위 넓이',
    //       leftValue: leftWeapon.areaEffect.areaInfo.width,
    //       rightValue: rightWeapon.areaEffect.areaInfo.width,
    //     },
    //   ],
    // },
    // {
    //   name: '범위 거리 정의',
    //   stats: [
    //     {
    //       name: '근거리',
    //       leftValue: leftWeapon.areaEffect.distance.near,
    //       rightValue: rightWeapon.areaEffect.distance.near,
    //     },
    //     {
    //       name: '중거리',
    //       leftValue: leftWeapon.areaEffect.distance.mid,
    //       rightValue: rightWeapon.areaEffect.distance.mid,
    //     },
    //     {
    //       name: '원거리',
    //       leftValue: leftWeapon.areaEffect.distance.far,
    //       rightValue: rightWeapon.areaEffect.distance.far,
    //     },
    //   ],
    // },
    // {
    //   name: '범위 데미지',
    //   stats: [
    //     {
    //       name: '근거리',
    //       leftValue: leftWeapon.areaEffect.damage.near,
    //       rightValue: rightWeapon.areaEffect.damage.near,
    //     },
    //     {
    //       name: '중거리',
    //       leftValue: leftWeapon.areaEffect.damage.mid,
    //       rightValue: rightWeapon.areaEffect.damage.mid,
    //     },
    //     {
    //       name: '원거리',
    //       leftValue: leftWeapon.areaEffect.damage.far,
    //       rightValue: rightWeapon.areaEffect.damage.far,
    //     },
    //   ],
    // },
    // {
    //   name: '분대 당 최대 피해 인원수',
    //   leftValue: leftWeapon.areaEffect.maxMember,
    //   rightValue: rightWeapon.areaEffect.maxMember,
    // },
    // {
    //   name: '산탄도',
    //   stats: [
    //     { name: '각도', leftValue: leftWeapon.scatter.angle, rightValue: rightWeapon.scatter.angle },
    //     {
    //       name: '거리 비율',
    //       leftValue: leftWeapon.scatter.distanceRatio,
    //       rightValue: rightWeapon.scatter.distanceRatio,
    //     },
    //     { name: '최대 거리', leftValue: leftWeapon.scatter.distanceMax, rightValue: rightWeapon.scatter.distanceMax },
    //     {
    //       name: '거리 offset',
    //       leftValue: leftWeapon.scatter.distanceOffset,
    //       rightValue: rightWeapon.scatter.distanceOffset,
    //     },
    //     {
    //       name: '안개 속 각도 배율',
    //       leftValue: leftWeapon.scatter.fowAngleMultiplier,
    //       rightValue: rightWeapon.scatter.fowAngleMultiplier,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '안개 속 거리 배율',
    //       leftValue: leftWeapon.scatter.fowDistanceMultiplier,
    //       rightValue: rightWeapon.scatter.fowDistanceMultiplier,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '이동 중 각도 배율',
    //       leftValue: leftWeapon.scatter.movementAngleMultiplier,
    //       rightValue: rightWeapon.scatter.movementAngleMultiplier,
    //       unit: 'percentage',
    //     },
    //     {
    //       name: '이동 중 거리 배율',
    //       leftValue: leftWeapon.scatter.movementDistanceMultiplier,
    //       rightValue: rightWeapon.scatter.movementDistanceMultiplier,
    //       unit: 'percentage',
    //     },
    //   ],
    // },
    // {
    //   name: '무기 셋팅',
    //   stats: [
    //     { name: '거치 시간', leftValue: leftWeapon.settingTime.setup, rightValue: rightWeapon.settingTime.setup },
    //     { name: '해체 시간', leftValue: leftWeapon.settingTime.teardown, rightValue: rightWeapon.settingTime.teardown },
    //   ],
    // },
    // {
    //   name: '제압',
    //   stats: [
    //     { name: '제압력', leftValue: leftWeapon.suppression.amount, rightValue: rightWeapon.suppression.amount },
    //     {
    //       name: '제압 범위',
    //       leftValue: leftWeapon.suppression.nearbyRadius,
    //       rightValue: rightWeapon.suppression.nearbyRadius,
    //     },
    //     {
    //       name: '범위 제압력 배율',
    //       leftValue: leftWeapon.suppression.nearbyMultiplier,
    //       rightValue: rightWeapon.suppression.nearbyMultiplier,
    //     },
    //   ],
    // },
    // {
    //   name: 'tracking',
    //   stats: [
    //     {
    //       name: '왼쪽 사격각',
    //       leftValue: leftWeapon.tracking.maxLeftAngle,
    //       rightValue: rightWeapon.tracking.maxLeftAngle,
    //     },
    //     {
    //       name: '오른쪽 사격각',
    //       leftValue: leftWeapon.tracking.maxRightAngle,
    //       rightValue: rightWeapon.tracking.maxRightAngle,
    //     },
    //     {
    //       name: '포탑 선회속도',
    //       leftValue: leftWeapon.tracking.speedHorizontal,
    //       rightValue: rightWeapon.tracking.speedHorizontal,
    //       unit: 'degree',
    //     },
    //   ],
    // },
  ];

  return (
    <>
      <StatsList statList1={statList1} statList2={statList2} />
    </>
  );
};

export default WeaponStatsList;
