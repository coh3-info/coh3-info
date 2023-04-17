import type { Entity, WeaponEntity } from './entity';
import type { Squad } from './squad';
import type { Weapon } from './weapon';

interface UnitLoadOutData {
  num: number;
  entityId: string;
  weaponIds: string[];
}

export type UnitLoadout = UnitLoadOutData[];

export type WeaponPair = [WeaponEntity, Weapon];

export interface Unit {
  loadout: UnitLoadout;
  squad: Squad;

  /**각 UnitLoadOutData의 entityId에 해당하는 모든 Entity를 포함합니다. WeaponEntity도 포함될 수 있습니다.*/
  entities: (Entity | WeaponEntity)[];

  /**각 UnitLoadOutData의 entityId에 해당하는 모든 Entity의 hardpoints로부터 얻을 수 있는 모든 WeaponEntity와 WeaponEnity에 연결된 Weapon을 한쌍으로 묶은 튜플을 포함합니다.
   * UnitLoadOutData의 Entity가 WeaponEntity일 경우도 있습니다.*/
  weaponPairs: WeaponPair[];
}
