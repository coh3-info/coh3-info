type Do = (file: any, fileName: string) => void;

export const traverseData = (root: any, dataName: string, callBack: Do) => {
  if (isFile(root)) {
    return callBack(root, dataName);
  }

  for (const key in root) {
    const child = root[key];
    traverseData(child, key, callBack);
  }
};

const isFile = (data: any) => {
  return 'pbgid' in data;
};
