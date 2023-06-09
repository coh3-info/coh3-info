import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state_store/store';
import {
  removeAllBookmarks,
  removeBookmark as _removeBookmark,
  selectBookmark as _selectBookmark,
} from '../../../state_store/slice/squad_bookmark_manager';

import SquadBookmarkItem from './SquadBookmarkItem';

const SquadBookmarkManager = () => {
  const { bookmarkList, bookmarkOnLeft, bookmarkOnRight } = useSelector((state: RootState) => {
    const { bookmarkList, bookmarkIdOnLeft, bookmarkIdOnRight } = state.squadBookmarkManager;
    const bookmarkOnLeft = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnLeft);
    const bookmarkOnRight = bookmarkList.find((bookmark) => bookmark.id === bookmarkIdOnRight);

    return {
      bookmarkList,
      bookmarkOnLeft,
      bookmarkOnRight,
    };
  });
  const dispatch = useDispatch();

  const removeBookmark = (id: string) => {
    dispatch(_removeBookmark({ id }));
  };

  const selectBookmark = (id: string, position: 'left' | 'right') => {
    dispatch(_selectBookmark({ id, position }));
  };

  return (
    <SquadBookmarkManagerWrapper>
      <Title>북마크</Title>
      <Header>
        {bookmarkList.length > 0 ? (
          <RemoveAllButton onClick={() => dispatch(removeAllBookmarks())}>비우기</RemoveAllButton>
        ) : undefined}
      </Header>
      <SquadListWrapper>
        {bookmarkList.length > 0 ? (
          <SquadList>
            {bookmarkList.map((bookmark) => {
              const isCheckedLeft = bookmarkOnLeft !== undefined ? bookmarkOnLeft.id === bookmark.id : false;
              const isCheckedRight = bookmarkOnRight !== undefined ? bookmarkOnRight.id === bookmark.id : false;

              return (
                <SquadBookmarkItem
                  key={bookmark.id}
                  bookmark={bookmark}
                  removeBookmark={removeBookmark}
                  selectBookmark={selectBookmark}
                  checkedLeft={isCheckedLeft}
                  checkedRight={isCheckedRight}
                />
              );
            })}
          </SquadList>
        ) : (
          <EmptyMassage>목록에서 분대를 선택해 주세요.</EmptyMassage>
        )}
      </SquadListWrapper>
    </SquadBookmarkManagerWrapper>
  );
};

export default SquadBookmarkManager;

const SquadBookmarkManagerWrapper = styled.div`
  padding: 8px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 6px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RemoveAllButton = styled.button`
  padding: 1px 3px;
  font-size: 12px;
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 3px;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hoverBg};
  }
`;

const SquadListWrapper = styled.div`
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const SquadList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  > li {
    display: flex;
    border: solid 1px ${({ theme }) => theme.colors.main.border};
    border-radius: 6px;
    font-size: 0.875rem;
  }
`;

const EmptyMassage = styled.div`
  padding: 10px 0;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.main.subTextGray};
`;
