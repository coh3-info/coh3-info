import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Title>
          COH3 <span>INFO</span>
        </Title>
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
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-weight: 300;

  > span {
    font-size: 24px;
    font-weight: 100;
  }
`;
