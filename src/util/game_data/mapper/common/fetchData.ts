const fetchData = async (path: string) => {
  const fileName = path.split('/')[2];
  const fetchStart = Date.now();
  const res = await fetch(path);
  const fetchEnd = Date.now();
  console.log(fileName, 'fetch time: ', fetchEnd - fetchStart, 'ms');

  const toJsonStart = Date.now();
  const json = await res.json();
  const toJsonEnd = Date.now();
  console.log(fileName, 'to json time: ', toJsonEnd - toJsonStart, 'ms');
  return json;
};

export const fetchSbps = async () => {
  return await fetchData('/game_data/sbps.json');
};

export const fetchEbps = async () => {
  return await fetchData('/game_data/ebps.json');
};

export const fetchWeapons = async () => {
  return await fetchData('/game_data/weapon.json');
};
