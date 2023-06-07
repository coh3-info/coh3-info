const fetchData = async (path: string) => {
  const res = await fetch(path);

  return await res.json();
};

export const fetchSbps = async () => {
  return await fetchData('/game_data/sbps.json');
};

export const fetchEbps = async () => {
  const res = await fetch('/game_data/ebps.json', { headers: { 'Cache-Control': 'no-store' } });
  return await res.json();
};

export const fetchWeapons = async () => {
  return await fetchData('/game_data/weapon.json');
};
