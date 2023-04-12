import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state_store/store';
import {
  removeAllBookmarks,
  removeBookmark as _removeBookmark,
  selectBookmark as _selectBookmark,
} from '../../../state_store/slice/squad_bookmark_manager';

import SquadBookmarkItem from './SquadBookmarkItem';

const SquadBookmarkManager = () => {
  const { bookmarkList, bookmarkOnLeft, bookmarkOnRight } = useSelector(
    (state: RootState) => state.squadBookmarkManager
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const removeBookmark = (id: string) => {
    dispatch(_removeBookmark({ id }));
  };

  const selectBookmark = (id: string, isLeft: boolean) => {
    dispatch(_selectBookmark({ id, isLeft }));
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
      {path === '/' ? (
        <LinkToSquadListButton to="/details">분대 상세 보기</LinkToSquadListButton>
      ) : (
        <LinkToSquadListButton to="/">분대 목록 보기</LinkToSquadListButton>
      )}
    </SquadBookmarkManagerWrapper>
  );
};

export default SquadBookmarkManager;

const SquadBookmarkManagerWrapper = styled.div`
  width: 240px;
  padding: 8px;
  border: solid 1px #979797;
  border-radius: 6px;
  position: sticky;
  top: 0;
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
  border: solid 1px #979797;
  border-radius: 3px;
  background-color: transparent;

  &:hover {
    background-color: #dfdfdf;
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
    border: solid 1px #979797;
    border-radius: 6px;
    font-size: 0.875rem;
  }
`;

const EmptyMassage = styled.div`
  padding: 10px 0;
  text-align: center;
  font-size: 0.875rem;
  color: #979797;
`;

const LinkToSquadListButton = styled(Link)`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border: solid 1px #979797;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    background-color: #dfdfdf;
  }
`;
