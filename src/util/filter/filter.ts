interface Filter {
  type: 'anti' | 'role' | 'vehicle-classification';
  en: string;
  ko: string;
}

interface FilterTable {
  [key: string]: Filter;
}

export const FILTER_TABLE: FilterTable = {
  //대응
  ANTI_INFANTRY: { type: 'anti', en: 'anti_infantry', ko: '대보병' },
  ANTI_VEHICLE: { type: 'anti', en: 'anti_vehicle', ko: '대차량' },
  ANTI_TANK: { type: 'anti', en: 'anti_tank', ko: '대전차' },
  ANTI_AIRCRAFT: { type: 'anti', en: 'anti_aircraft', ko: '대공' },
  ANTI_STRUCTURE: { type: 'anti', en: 'anti_structure', ko: '건물철거' },
  NON_COMBATANT: { type: 'anti', en: 'non_combatant', ko: '비전투' },

  //역할
  MAINLINE: { type: 'role', en: 'mainline', ko: '주력' },
  ELITE: { type: 'role', en: 'elite', ko: '정예' },
  RECON: { type: 'role', en: 'recon', ko: '정찰' },
  SUPPORT: { type: 'role', en: 'support', ko: '지원' },
  ENGINEER: { type: 'role', en: 'engineer', ko: '공병' },
  SNIPER: { type: 'role', en: 'sniper', ko: '저격수' },
  ARTILLERY: { type: 'role', en: 'artillery', ko: '폭격' },
  MEDIC: { type: 'role', en: 'medic', ko: '치료' },
  GENERALIST: { type: 'role', en: 'generalist', ko: '범용' },

  //차량 종류
  LIGHT_VEHICLE: { type: 'vehicle-classification', en: 'light_vehicle', ko: '경차량' },
  ARMORED_CAR: { type: 'vehicle-classification', en: 'armored_car', ko: '장갑차' },
  LIGHT_TANK: { type: 'vehicle-classification', en: 'light_tank', ko: '경전차' },
  MEDIUM_TANK: { type: 'vehicle-classification', en: 'medium_tank', ko: '중형전차' },
  HEAVY_TANK: { type: 'vehicle-classification', en: 'heavy_tank', ko: '중전차' },
  TANK_DESTROYER: { type: 'vehicle-classification', en: 'tank_destroyer', ko: '구축전차' },
  ASSAULT_GUN: { type: 'vehicle-classification', en: 'assault_gun', ko: '돌격포' },
  SELF_PROPELLED_ARTILLERY: { type: 'vehicle-classification', en: 'self_propelled_artillery', ko: '자주포' },
};
