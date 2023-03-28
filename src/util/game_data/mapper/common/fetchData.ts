const fetchData = async (path: string) => {
  const res = await fetch(path);

  return await res.json();
};

export const fetchSbps = async () => {
  return await fetchData('/game_data/sbps.json');
};

export const fetchEbps = async () => {
  return await fetchData('/game_data/ebps.json');
};

export const fetchWeapon = async () => {
  return await fetchData('/game_data/weapon.json');
};
