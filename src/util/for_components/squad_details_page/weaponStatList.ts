import { createStatList } from './stat';

import type { Stat, StatGroup } from '../../../types/for_components/squad_details_page/stat';
import type { StatListFormat } from './stat';
import type { WeaponStats } from '../../../types/stats/weaponStats';

const createWeaponStatList = (
  entities: (WeaponStats | undefined)[],
  format: StatListFormat<WeaponStats | undefined>
): (Stat | StatGroup)[] => {
  return createStatList<WeaponStats | undefined>(entities, format);
};

export const createWeaponStatList1 = (entities: (WeaponStats | undefined)[]) => {
  return createWeaponStatList(entities, [
    ['공격력', (t) => [t?.damage.min, t?.damage.max], { separator: '~' }],
    ['비관통 공격력', (t) => [t?.deflectionDamage.min, t?.deflectionDamage.max], { separator: '~' }],
    ['사거리', (t) => [t?.range.min, t?.range.max], { separator: '~' }],
    [
      '거리 정의',
      [
        ['근거리', (t) => t?.range.distance.near],
        ['중거리', (t) => t?.range.distance.mid],
        ['원거리', (t) => t?.range.distance.far],
      ],
    ],
    [
      '관통력',
      [
        ['근거리', (t) => t?.penetration.near],
        ['중거리', (t) => t?.penetration.mid],
        ['원거리', (t) => t?.penetration.far],
      ],
    ],
    [
      '명중률',
      [
        ['근거리', (t) => t?.accuracy.near, { unit: 'percentage' }],
        ['중거리', (t) => t?.accuracy.mid, { unit: 'percentage' }],
        ['원거리', (t) => t?.accuracy.far, { unit: 'percentage' }],
      ],
    ],
    [
      '조준 시간 보정',
      [
        ['근거리', (t) => t?.aim.aimTimeMultiplier.near],
        ['중거리', (t) => t?.aim.aimTimeMultiplier.mid],
        ['원거리', (t) => t?.aim.aimTimeMultiplier.far],
      ],
    ],

    ['조준 시간', (t) => [t?.aim.fireAimTime.min, t?.aim.fireAimTime.max], { separator: '~' }],
    ['조준 준비 시간', (t) => [t?.aim.readyAimTime.min, t?.aim.readyAimTime.max], { separator: '~' }],
    ['연사 가능 여부', (t) => t?.burst.canBurst],
    ['연사 시간', (t) => [t?.burst.duration.min, t?.burst.duration.max], { separator: '~' }],
    [
      '연사 시간 보정',
      [
        ['근거리', (t) => t?.burst.durationMultiplier.near],
        ['중거리', (t) => t?.burst.durationMultiplier.mid],
        ['원거리', (t) => t?.burst.durationMultiplier.far],
      ],
    ],

    ['연사력', (t) => [t?.burst.rateOfFire.min, t?.burst.rateOfFire.max], { separator: '~' }],
    [
      '연사력 보정',
      [
        ['근거리', (t) => t?.burst.rateOfFireMultiplier.near],
        ['중거리', (t) => t?.burst.rateOfFireMultiplier.mid],
        ['원거리', (t) => t?.burst.rateOfFireMultiplier.far],
      ],
    ],
    ['쿨다운', (t) => [t?.cooldown.duration.min, t?.cooldown.duration.max], { separator: '~' }],
    [
      '쿨다운 보정',
      [
        ['근거리', (t) => t?.cooldown.durationMultiplier.near],
        ['중거리', (t) => t?.cooldown.durationMultiplier.mid],
        ['원거리', (t) => t?.cooldown.durationMultiplier.far],
      ],
    ],
    [
      '사격',
      [
        ['wind_up', (t) => t?.fire.windUp],
        ['wind_down', (t) => t?.fire.windDown],
      ],
    ],
  ]);
};

export const createWeaponStatList2 = (entities: (WeaponStats | undefined)[]) => {
  return createWeaponStatList(entities, [
    ['범위', [['범위 형태', (t) => t?.areaEffect.areaInfo.areaType]]],
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

    [
      '범위 거리 정의',
      [
        ['근거리', (t) => t?.areaEffect.distance.near],
        ['중거리', (t) => t?.areaEffect.distance.mid],
        ['원거리', (t) => t?.areaEffect.distance.far],
      ],
    ],
    [
      '범위 데미지',
      [
        ['근거리', (t) => t?.areaEffect.damageMultiplier.near],
        ['중거리', (t) => t?.areaEffect.damageMultiplier.mid],
        ['원거리', (t) => t?.areaEffect.damageMultiplier.far],
      ],
    ],
    ['분대 당 최대 피해  인원수', (t) => t?.areaEffect.maxMember],
    [
      '산탄도',
      [
        ['각도', (t) => t?.scatter.angle],
        ['거리 비율', (t) => t?.scatter.distanceRatio],
        ['최대 거리', (t) => t?.scatter.distanceMax],
        ['거리 offset', (t) => t?.scatter.distanceOffset],
        ['안개 속 각도 배율', (t) => t?.scatter.fowAngleMultiplier],
        ['안개 속 거리 배율', (t) => t?.scatter.fowDistanceMultiplier],
        ['이동 중 각도 배율', (t) => t?.scatter.movementAngleMultiplier],
        ['이동 중 거리 배율', (t) => t?.scatter.movementDistanceMultiplier],
      ],
    ],
    [
      '무기 셋팅',
      [
        ['거치 시간', (t) => t?.settingTime.setup],
        ['해체 시간', (t) => t?.settingTime.teardown],
      ],
    ],
    [
      '제압',
      [
        ['제압력', (t) => t?.suppression.amount],
        ['제압 범위', (t) => t?.suppression.nearbyRadius],
        ['범위 제압력 배율', (t) => t?.suppression.nearbyMultiplier],
      ],
    ],
    [
      'tracking',
      [
        ['왼쪽 사격각', (t) => t?.tracking.maxLeftAngle],
        ['오른쪽 사격각', (t) => t?.tracking.maxRightAngle],
        ['포탑 선회속도', (t) => t?.tracking.speedHorizontal],
      ],
    ],
    [
      '이동사격',
      [
        ['이동사격 가능 여부', (t) => t?.moving.canFireWhileMoving],
        ['명중률 보정', (t) => t?.moving.accuracyMultiplier],
        ['쿨다운 보정', (t) => t?.moving.cooldownMultiplier],
        ['연사시간 보정', (t) => t?.moving.burstMultiplier],
      ],
    ],
  ]);
};
