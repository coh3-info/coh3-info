type LoadoutData = {
  num: number;
  entityId: string;
};

export type SquadData = {
  id: string; //coh3 데이터의 파일 이름
  nameEN: string;
  name: string;
  type: 'infantry' | 'team_weapon' | 'vehicle';
  race: 'us_forces' | 'british_forces' | 'wehrmacht' | 'afrika_korps';
  imageUrl: {
    portrait: string;
    icon: string;
  };
  abilities: [];
  captureRateMutiplier: number;
  revertRateMutiplier: number;
  constructions: [];
  loadout: LoadoutData[];
  population: {
    pop: number;
  };
  reinforce: {
    costPercentage: number;
    timePercentage: number;
  };
  upgrades: [];
};

export default SquadData;
