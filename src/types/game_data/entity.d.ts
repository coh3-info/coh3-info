type InfantryArmor = number;
interface VehicleArmor {
  front: number;
  side: number;
  rear: number;
}

interface Entity {
  id: string; //coh3 데이터의 파일 이름
  hardpoints: string[];
  cost: {
    fuel: number;
    manpower: number;
    time: number;
  };
  health: {
    armor: InfantryArmor | VehicleArmor;
    hitpoints: number;
    targetSize: number; //회피율(피격률)
  };
  moving: {
    acceleration: number;
    deceleration: number;
    reverseAcceleration: number;
    reverseDeceleration: number;
    rotationRate: number; //초당 회전 각도

    // 데이터 설명을 읽어보면 defaultSpeed가 기본 최고속도인듯 합니다. maxSpeed는 속도 버프를 받을 때 최대속도 같습니다.
    speedScalingTable: {
      defaultSpeed: number;
      maxSpeed: number;
      minSpeed: number;
      reverseMaxSpeed: number;
    };
  };
  population: {
    personnelPop: number;
  };
  sight: {
    detectCamouflage: {
      global: number;
      mine: number;
      unit: number;
    };
    sightPackage: {
      outerRadius: number; //최대 시야 범위
    };
  };
  simInventoryItem: {
    capacityRequired: number;
    category: 'casualty' | 'default' | 'upgrade' | 'special' | '';
    ownershipAttributes: {
      dropOnDeathChance: number;
    };
  };

  //id가 w_로 시작하는 entity만 weapon속성을 가지고 있습니다.
  weapon?: string;
}

interface Ebps {
  [key: string]: Entity;
}

export { Ebps };

export default Entity;
