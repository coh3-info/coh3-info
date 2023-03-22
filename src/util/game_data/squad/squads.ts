import type Squad from '../../../types/game_data/squad';

//US Forces
import squadRiflemenUS from '../../../game_data/data/sbps/american/infantry/riflemen_us';
import squadShermenUS from '../../../game_data/data/sbps/american/vehicles/sherman_us';

//British Forces
import squadMortar81mmUK from '../../../game_data/data/sbps/british/team_weapons/mortar_81mm_uk';

//Wehrmacht
import squadHmgMg42GER from '../../../game_data/data/sbps/german/team_weapons/hmg_mg42_ger';

//Afrika Korps
import squadGuastatoriAK from '../../../game_data/data/sbps/afrika_korps/infantry/guastatori_ak';

const squads: Squad[] = [squadRiflemenUS, squadShermenUS, squadGuastatoriAK, squadMortar81mmUK, squadHmgMg42GER];

export default squads;
