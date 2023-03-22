import _weapons from './weapons';

const weapons = new Map(
  _weapons.map((wepon) => {
    return [wepon.id, wepon];
  })
);

export const getWeapon = (id: string) => {
  const weapon = weapons.get(id);

  if (weapon === undefined) {
    console.error(new Error(`해당id의 weapon을 찾을 수 없습니다. weapon id: ${id}`));
  }

  return weapon;
};
