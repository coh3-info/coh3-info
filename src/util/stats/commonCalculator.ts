type MinMax = { min: number; max: number };
type MultiplierByDistance = {
  near: number;
  mid: number;
  far: number;
};
type MinMaxByDistance = {
  near: MinMax;
  mid: MinMax;
  far: MinMax;
};

export const calcAverageOfMinMax = (objOfMinMax: MinMax) => {
  const { min, max } = objOfMinMax;
  return (min + max) / 2;
};

type CalcMinMaxByDistance = (
  objOfMinMax: MinMax,
  multiplier: MultiplierByDistance,
  numToAdd?: number
) => MinMaxByDistance;

export const calcMinMaxByDistance: CalcMinMaxByDistance = (objOfMinMax, multiplier, numToAdd = 0) => {
  const { min, max } = objOfMinMax;
  const { near, mid, far } = multiplier;

  return {
    near: { min: min * near + numToAdd, max: max * near + numToAdd },
    mid: { min: min * mid + numToAdd, max: max * mid + numToAdd },
    far: { min: min * far + numToAdd, max: max * far + numToAdd },
  };
};
