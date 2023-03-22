type Distance = {
  far: number;
  mid: number;
  near: number;
};

type MinMax = {
  max: number;
  min: number;
};

type CircleArea = {
  areaType: 'circle';
  radius: number;
};

type RectangleArea = {
  areaType: 'rectangle';
  lenght: number;
  width: number;
};

type Weapon = {
  id: string; //coh3 데이터의 파일 이름
  name: string;
  accuracy: Distance;
  aim: {
    aimTimeMultiplier: Distance;
    fireAimTime: MinMax;
    readyAimTime: MinMax;
  };
  areaEffect: {
    accuracy: Distance;
    penetration: Distance;
    areaInfo: CircleArea | RectangleArea | null;
    damageMultiplier: Distance;
    maxMember: number;
    distance: Distance;
  };
  burst: {
    canBurst: boolean;
    duration: MinMax;
    durationMultiplier: Distance;
    rateOfFire: MinMax;
    rateOfFireMultiplier: Distance;
  };
  cooldown: {
    duration: MinMax;
    durationMultiplier: Distance;
  };
  damage: number;
  deflectionDamageMultiplier: number; //비관통시 데미지 보정 배율
  windDown: number;
  windUp: number;
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
  setup: number;
  suppression: {
    amount: number;
    nearbyMultiplier: number;
    nearbyRadius: number;
  };
  teardown: number;
  tracking: {
    maxLeftAngle: number;
    maxRightAngle: number;
    speedHorizontal: number; //초당 회전 각도. (포탑 선회같은거)
  };
};

export default Weapon;
