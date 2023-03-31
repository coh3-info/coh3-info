import Entity, { WeaponEntity } from './entity';
import Squad from './squad';
import Weapon from './weapon';

interface LoadOutData {
  num: number;
  entity: Entity | WeaponEntity;
  weapons: Weapon[];
}

export type Loadout = LoadOutData[];

interface Unit {
  squad: Squad;
  loadout: Loadout;
}

export default Unit;
