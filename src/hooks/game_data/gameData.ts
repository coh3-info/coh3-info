import { useSelector } from 'react-redux';
import { RootState } from '../../state_store/store';
import type { Unit } from '../../types/game_data/unit';
import { createUnit } from '../../util/game_data/unit';

export const useCreateUnit = () => {
  const { sbps, ebps, weapons } = useSelector((state: RootState) => state.gameData);

  return (squadId: string): Unit | undefined => {
    return createUnit(squadId, { sbps, ebps, weapons });
  };
};
