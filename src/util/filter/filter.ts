interface Filter {
  en: string;
  ko: string;
}

interface FilterTable {
  [key: string]: Filter;
}

export const FILTER_TABLE: FilterTable = {
  //대응
  ANTI_INFANTRY: {
    en: 'anti_infantry',
    ko: '대보병',
  },
  ANTI_VEHICLE: {
    en: 'anti_vehicle',
    ko: '대차량',
  },
  ANTI_TANK: {
    en: 'anti_tank',
    ko: '대전차',
  },
  ANTI_AIRCRAFT: {
    en: 'anti_aircraft',
    ko: '대공',
  },
  ANTI_STRUCTURE: {
    en: 'anti_structure',
    ko: '건물철거',
  },
  NON_COMBATANT: {
    en: 'non_combatant',
    ko: '비전투',
  },

  //역할
  MAINLINE: {
    en: 'mainline',
    ko: '주력',
  },
  ELITE: {
    en: 'elite',
    ko: '정예',
  },
  RECON: {
    en: 'recon',
    ko: '정찰',
  },
  SUPPORT: {
    en: 'support',
    ko: '지원',
  },
  ENGINEER: {
    en: 'engineer',
    ko: '공병',
  },
  SNIPER: {
    en: 'sniper',
    ko: '저격수',
  },
  ARTILLERY: {
    en: 'artillery',
    ko: '폭격',
  },
  MEDIC: {
    en: 'medic',
    ko: '치료',
  },
  GENERALIST: {
    en: 'generalist',
    ko: '범용',
  },

  //차량 종류
  LIGHT_VEHICLE: {
    en: 'light_vehicle',
    ko: '경차량',
  },

  ARMORED_CAR: {
    en: 'armored_car',
    ko: '장갑차',
  },
  LIGHT_TANK: {
    en: 'light_tank',
    ko: '경전차',
  },

  MEDIUM_TANK: {
    en: 'medium_tank',
    ko: '중형전차',
  },

  HEAVY_TANK: {
    en: 'heavy_tank',
    ko: '중전차',
  },

  TANK_DESTROYER: {
    en: 'tank_destroyer',
    ko: '구축전차',
  },

  ASSAULT_GUN: {
    en: 'assault_gun',
    ko: '돌격포',
  },

  SELF_PROPELLED_ARTILLERY: {
    en: 'self_propelled_artillery',
    ko: '자주포',
  },
};
