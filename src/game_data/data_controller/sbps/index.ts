//US Forces
import squadRiflemenUS from '../../data/sbps/american/infantry/riflemen_us';
import squadShermenUS from '../../data/sbps/american/vehicles/sherman_us';

//British Forces
import squadMortar81mmUK from '../../data/sbps/british/team_weapons/mortar_81mm_uk';

//Wehrmacht
import squadHmgMg42GER from '../../data/sbps/german/team_weapons/hmg_mg42_ger';

//Afrika Korps
import squadGuastatoriAK from '../../data/sbps/afrika_korps/infantry/guastatori_ak';

const sbpsList = [squadRiflemenUS, squadShermenUS, squadGuastatoriAK, squadMortar81mmUK, squadHmgMg42GER];

export const getSquadList = () => {
  return sbpsList;
};
