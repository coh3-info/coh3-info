/**
 * 거리 값 입니다.
 */
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

type Area = NoneArea | CircleArea | RectangleArea;

interface Weapon {
  /** 데이터 파일이름 */
  id: string;
  name: string;

  /** 명중률
   * @data_path weapon/weapon_bag/accuracy
   */
  accuracy: Distance;

  /** 조준 시간에 관련된 데이터 */
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
  areaEffect: {
    accuracy: Distance;
    penetration: Distance;
    areaInfo: Area;
    damageMultiplier: Distance;
    maxMember: number;
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
