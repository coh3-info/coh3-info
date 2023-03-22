type InfantryArmor = number;
type VehicleArmor = {
  front: number;
  side: number;
  rear: number;
};

type Entity = {
  id: string; //coh3 데이터의 파일 이름
  type: 'infantry' | 'crew' | 'vehicle' | 'weapon';
  weapons: string[];
  cost: {
    fuel: number;
    manpower: number;
    time: number;
  };
  armor: InfantryArmor | VehicleArmor;
  hitpoints: number;
  targetSize: number; //회피율(피격률)
  moving: {
    acceleration: number;
    deceleration: number;
    reverseAcceleration: number;
    reverseDeceleration: number;
    rotaionRate: number; //초당 회전 각도
    maxSpeed: number;
    reverseMaxSpeed: number;
  };
  population: {
    pop: number;
  };
  detect: number; //탐지거리
  sight: number;
};

export default Entity;
