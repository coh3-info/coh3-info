import type { PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import type { SquadBookmark } from '../../../../types/bookmark/bookmark';
import type { SquadBookmarkManagerInitialState } from '..';
import UnitStats from '../../../../types/stats/unitStats';

interface Payload {
  unit: UnitStats;
}

const addBookmark: CaseReducer<SquadBookmarkManagerInitialState, PayloadAction<Payload>> = (state, action) => {
  const { unit } = action.payload;

  //loadout중 num이 가장 큰 entity를 그 squad의 주 entity라고 가정합니다.
  const initSelectedEntityId = unit.loadout.reduce((important, loadoutData) =>
    important.num > loadoutData.num ? important : loadoutData
  ).entityId;

  const newBookmark: SquadBookmark = {
    id: `${Date.now()}${state.bookmarkList.length}`,
    unit,
    selectedEntityId: initSelectedEntityId,
    selectedWeaponId: unit.weapons[0].id,
  };

  if (state.bookmarkList.length === 0) {
    state.bookmarkOnLeft = newBookmark;
  }

  if (state.bookmarkList.length === 1) {
    state.bookmarkOnRight = newBookmark;
  }

  state.bookmarkList = [...state.bookmarkList, newBookmark];
};

export default addBookmark;
