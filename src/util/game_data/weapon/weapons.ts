import type WeaponData from '../../../types/game_data/weapon';

//US Forces
import weaponGarandRiflemanUS from '../../../game_data/data/weapon/american/small_arms/single_fire/rifle/garand_rifleman_us';
import weaponTompsonRiflemenLeaderUS from '../../../game_data/data/weapon/american/small_arms/machine_gun/sub_machine_gun/thompson_riflemen_leader_us';
import weapon75mmShermanUS from '../../../game_data/data/weapon/american/ballistric_weapon/tank_gun/75mm_sherman_us';
import weapon30CalCoaxialShermanUS from '../../../game_data/data/weapon/american/small_arms/machine_gun/light_machine_gun/30cal_coaxial_sherman_us';
import weapon30CalHullShermanUS from '../../../game_data/data/weapon/american/small_arms/machine_gun/light_machine_gun/30cal_hull_sherman_us';

//British Forces

//Wehrmacht

//Afrika Korps

const weapons: WeaponData[] = [
  weaponGarandRiflemanUS,
  weaponTompsonRiflemenLeaderUS,
  weapon75mmShermanUS,
  weapon30CalCoaxialShermanUS,
  weapon30CalHullShermanUS,
];

export default weapons;
