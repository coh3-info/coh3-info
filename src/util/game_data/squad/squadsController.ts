import _squads from './squads';

const squads = new Map(
  _squads.map((squad) => {
    return [squad.id, squad];
  })
);

export const getSquads = () => {
  return _squads;
};

export const getSquad = (id: string) => {
  const sqaud = squads.get(id);

  if (sqaud === undefined) {
    console.error(new Error(`해당id의 squad 찾을 수 없습니다. squad id: ${id}`));
  }

  return sqaud;
};

export const getLoadoutOfSquad = (id: string) => {
  const squad = getSquad(id);

  if (squad !== undefined) {
    const loadout = squad.loadout.map((data) => {
      return { ...data };
    });

    return loadout;
  }

  return [];
};
