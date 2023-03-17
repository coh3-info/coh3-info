type Entities = {
  num: number;
  entity: string;
}[];

export type Squad = {
  uniqueName: string; //coh3 데이터의 파일 이름
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
  entities: Entities;
  reinforce: {
    costPercentage: number;
    timePercentage: number;
  };
  upgrades: [];
};

export default Squad;
