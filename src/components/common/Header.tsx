import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <TitleLink to="/">
          <Title>
            COH3 <span>INFO</span>
            <BetaLabel>.BETA</BetaLabel>
          </Title>
        </TitleLink>
        <div>
          <GameDataVersion>
            GameData <br />
            v1.2.2
          </GameDataVersion>
        </div>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.main.bgBlack};
  padding: 0 12px;
`;

const HeaderInner = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 20px 0;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main.textWhite};
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;

  > span {
    font-size: 1.375rem;
    font-weight: 100;
  }
`;

const BetaLabel = styled.div`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 300;
  margin-left: 3px;
`;

const GameDataVersion = styled.div`
  font-size: 13px;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.main.textWhite};
  text-align: center;
`;
