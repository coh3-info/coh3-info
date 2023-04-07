/** 거리 값*/
interface Distance {
  far: number;
  mid: number;
  near: number;
}

interface MinMax {
  max: number;
  min: number;
}

interface NoneArea {
  areaType: 'none';
}

interface CircleArea {
  areaType: 'circle';
  radius: number;
}

interface RectangleArea {
  areaType: 'rectangle';
  lenght: number;
  width: number;
}

export type Area = NoneArea | CircleArea | RectangleArea;

interface Weapon {
  /** 데이터 파일이름 */
  id: string;

  name: string;

  /** 명중률
   * @data_path weapon/weapon_bag/accuracy
   */
  accuracy: Distance;

  /** 조준 시간 데이터 */
  aim: {
    /** 조준 시간 보정치 <br/>
     *
     * fireAimTime과 readyAimTime은 거리에 따라 이 값이 곱해져 보정됩니다.
     * @data_path weapon/weapon_bag/accuracy/aim_time_multiplier
     */
    aimTimeMultiplier: Distance;

    /** cooldown과 격발 사이 또는 reload와 격발 사이의 조준시간
     * @data_path weapon/weapon_bag/accuracy/fire_aim_time
     */
    fireAimTime: MinMax;

    /** 첫 격발전 조준시간 <br/>
     *
     * 적과 조우 시 첫 격발전 걸리는 조준시간입니다.
     * @data_path weapon/weapon_bag/accuracy/ready_aim_time
     */
    readyAimTime: MinMax;
  };

  /** 범위 피해 데이터 */
  areaEffect: {
    /** 범위 피해 명중률 <br/>
     *
     * 대부분 무기의 near, mid, far값이 모두 5 또는 15입니다. 이는 범위안에 있다면 거의 확정적으로 피해를 준다고 볼 수 있습니다.
     * 값이 5 또는 15가 아닌경우는 거의 1입니다. 이는 범위안에 있어도 상대의 피격률(Entity.health.targetSize)에 따라 피해를 주지 못할 수 있습니다.
     * 보통 37mm_greyhound_us, 20mm_aa_gun_ger같은 비교적 범위 피해 규모가 작은 무기의 값이 1인경우가 많습니다.
     * @data_path weapon/weapon_bag/area_effect/accuracy
     */
    accuracy: Distance;

    /** 범위 피해 관통력 <br/>
     *
     * 범위 피해 관통력은 항상 상대의 전면 장갑(front armor)으로 계산합니다.
     * @data_path weapon/weapon_bag/area_effect/penetration
     */
    penetration: Distance;

    /** 범위의 형태 및 크기 정보 <br/>
     *
     * areaInfo의 template_reference의 종류는 circle_area_option,  rectangle_area_option, point_area_option 총 3가지가 있습니다.
     * 폭파형 무기는 circle_area_option, 화염방사기와 항공기의 기총소사는 rectangle_area_option, 범위피해가 없는 무기는 point_area_option입니다.
     * @data_path weapon/weapon_bag/area_effeact/area_info
     */
    areaInfo: Area;

    /** 공격력 보정치 <br/>
     *
     * 중심부로부터의 거리에 따라 이 값이 damage값과 곱하여 범위 공격력을 구합니다.
     * @data_path weapon/weapon_bag/area_effeact/damage
     */
    damageMultiplier: Distance;

    /** 분대 당 최대 피해 인원 <br/>
     *
     * 한번의 공격으로 피해를 줄 수 있는 분대 당 최대 인원 수 입니다.
     * 만약 값이 3일 때 상대 분대의 구성원이 모두 범위내에 있더라도 3명의 구성원에게만 피해를 줄 수 있습니다.
     * 값이 음수라면 제한없음을 의미합니다.
     */
    maxMember: number;

    /** 범위 피해 거리 정의 <br/>
     *
     * areaEffect의 near, mid, far값은 모두 distance의 near, mid, far거리에서의 값을 의미합니다.
     * 예를들어 distance.near값이 2이고 damageMultiplier.near값이 0.84라면 이는 '중심부로부터 거리 2에서 공격력 보정치는 0.84'를 의미합니다.
     */
    distance: Distance;
  };

  /** 연사에 관련된 데이터 */
  burst: {
    /** 연사가능 여부 <br/>
     *
     * ture일 때 무기 격발시 연사 데이터에 따라 여러번 격발합니다.
     * false일 때 무기 격발시 한번만 격발합니다.
     * @data_path weapon/weapon_bag/burst/can_burst
     */
    canBurst: boolean;

    /** 연사 시간
     * @data_path weapon/weapon_bag/burst/duration
     */
    duration: MinMax;

    /** 연사 시간 보정치 <br/>
     *
     * duration은 거리에 따라 이 값이 곱해져 보정됩니다.
     * @data_path weapon/weapon_bag/burst/duration_multiplier
     */
    durationMultiplier: Distance;

    /** 연사력 <br/>
     *
     * 연사시 초당 격발 횟수입니다.
     * @data_path weapon/weapon_bag/burst/rate_of_fire
     */
    rateOfFire: MinMax;

    /** 연사력 보정치 <br/>
     *
     * rateOfFire는 거리에 따라 이 값이 곱해져 보정됩니다.
     * @data_path weapon/weapon_bag/burst/duration_multiplier
     */
    rateOfFireMultiplier: Distance;
  };
  cooldown: {
    duration: MinMax;
    durationMultiplier: Distance;
  };
  damage: {
    min: number;
    max: number;
    damageType: string;
  };
  defaultAttackType: string;
  deflection: {
    deflectionDamageMultiplier: number; //비관통시 데미지 보정 배율
    hasDeflectionDamage: boolean;
  };
  fire: {
    windDown: number;
    windUp: number;
  };
  moving: {
    accuracyMultiplier: number;
    burstMultiplier: number;
    canFireWhileMoving: boolean;
    cooldownMultiplier: number;
  };
  penetration: Distance;
  range: {
    distance: Distance;
    max: number;
    min: number;
  };
  reload: {
    duration: MinMax;
    durationMultiplier: Distance;
    frequency: MinMax; //재장전 주기. frequency + 1이 탄창 용량이라 생각하면 됨.
  };
  scatter: {
    angle: number;
    distanceMax: number;
    distanceOffset: number; //-1 ~ 1사이 값
    distanceRatio: number;
    fowAngleMultiplier: number;
    fowDistanceMultiplier: number;
    movementAngleMultiplier: number;
    movementDistanceMultiplier: number;
  };
  setup: {
    duration: number;
  };
  suppression: {
    amount: number;
    nearbyMultiplier: number;
    nearbyRadius: number;
  };
  teardown: {
    duration: number;
  };
  tracking: {
    maxLeftAngle: number;
    maxRightAngle: number;
    speedHorizontal: number; //초당 회전 각도. (포탑 선회같은거)
  };
}

interface Weapons {
  [key: string]: Weapon;
}

export { Weapons };

export default Weapon;
