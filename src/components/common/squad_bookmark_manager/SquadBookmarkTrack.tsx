import { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SquadBookmarkManager from './SquadBookmarkManager';

import toggleArrow from '../../../images/icons/common/toggle-arrow.svg';

const SquadBookmarkManagerTrack = () => {
  const [isBookmarkVisible, setIsBokkmarkVisible] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  return (
    <SquadBookmarkManagerTrackWrapper>
      <SquadBookmarkManagerThumb>
        <SquadBookmarkManagerThumbHeader>
          {path === '/compare/squad-list' ? (
            <LinkToSquadListButton to="/compare/comparator">유닛 비교하기</LinkToSquadListButton>
          ) : (
            <LinkToSquadListButton to="/compare/squad-list">유닛 목록보기</LinkToSquadListButton>
          )}
          <BookmarkToggleButton
            isVisible={isBookmarkVisible}
            onClick={() => setIsBokkmarkVisible((prev) => !prev)}
          ></BookmarkToggleButton>
        </SquadBookmarkManagerThumbHeader>
        <SquadBookmarkManagerWrapper isVisible={isBookmarkVisible}>
          <SquadBookmarkManager />
        </SquadBookmarkManagerWrapper>
      </SquadBookmarkManagerThumb>
    </SquadBookmarkManagerTrackWrapper>
  );
};

export default SquadBookmarkManagerTrack;

const SquadBookmarkManagerTrackWrapper = styled.div`
  background-color: ${({ theme }) => `${theme.colors.main.bgWhite}`};

  position: relative;
  order: 1;

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    order: 0;
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

const SquadBookmarkManagerThumb = styled.div`
  width: 240px;
  padding-top: 10px;
  position: sticky;
  top: 0;

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    position: static;
    width: 100%;
  }
`;

const SquadBookmarkManagerThumbHeader = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const BookmarkToggleButton = styled.button<{ isVisible: boolean }>`
  display: none;
  height: 30px;
  aspect-ratio: 1/1;
  background: url(${toggleArrow}) no-repeat center / 14px;
  ${({ isVisible }) => isVisible && 'transform: rotate(180deg);'}
  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 6px;

  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    display: block;
  }
`;

const SquadBookmarkManagerWrapper = styled.div<{ isVisible: boolean }>`
  @media screen and (max-width: ${({ theme }) => `${theme.screenSize.mobile}px`}) {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }
`;

const LinkToSquadListButton = styled(Link)`
  width: 100%;
  height: 30px;

  border: solid 1px ${({ theme }) => theme.colors.main.border};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.main.textBlack};
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.hoverBg};
  }
`;
