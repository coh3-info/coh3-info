import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Title>
          COH3 <span>INFO</span>
          <BetaLabel>.BETA</BetaLabel>
        </Title>
        <div>
          <GameDataVersion>
            GameData <br />
            v1.1.3
          </GameDataVersion>
        </div>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: #353535;
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

const Title = styled.h1`
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 300;

  > span {
    font-size: 1.375rem;
    font-weight: 100;
  }
`;

const GameDataVersion = styled.div`
  font-size: 13px;
  font-weight: 100;
  text-align: center;
  color: #ffffff;
`;

const BetaLabel = styled.div`
  display: inline-block;
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: 300;
  margin-left: 3px;
`;
