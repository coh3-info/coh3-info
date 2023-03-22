import type EntityData from '../../../types/game_data/entity';

//US Forces
import entityRiflemanUS from '../../../game_data/data/ebps/american/infantry/rifleman_us';
import entityRiflemenSquadLeaderUS from '../../../game_data/data/ebps/american/infantry/rifleman_squad_leader_us';
import entityShermanUS from '../../../game_data/data/ebps/american/vehicles/sherman_us';

//British Forces
import entityCrewMortarIndianUK from '../../../game_data/data/ebps/british/team_weapons/crew_mortar_indian_uk';
import entityW81mmMortarUK from '../../../game_data/data/ebps/british/weapons/w_81mm_mortar_uk';

//Wehrmacht
import entityCrewHmgGER from '../../../game_data/data/ebps/german/team_weapons/crew_hmg_ger';
import entityWMg42HmgGER from '../../../game_data/data/ebps/german/weapons/w_mg42_hmg_ger';

//Afrika Korps
import entityGuastatoriAK from '../../../game_data/data/ebps/afrika_korps/infantry/guastatori_ak';

const entities: EntityData[] = [
  entityRiflemanUS,
  entityRiflemenSquadLeaderUS,
  entityShermanUS,

  entityCrewMortarIndianUK,
  entityW81mmMortarUK,

  entityCrewHmgGER,
  entityWMg42HmgGER,

  entityGuastatoriAK,
];

export default entities;
