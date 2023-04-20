import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <Paragraph>© 2023 coh3info.com</Paragraph>
        <Temp>
          <Paragraph>본 사이트는 게임 Company Of Heroes3의 비공식 팬사이트입니다. </Paragraph>
          <Paragraph>
            본 사이트에서 사용하는 Company of Heroes 3와 관련된 모든 이미지, 로고 등의 콘텐츠는 Relic Entertainment와
            SEGA Holdings Co.의 지적 재산권에 속합니다.
          </Paragraph>
        </Temp>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.header`
  background-color: #353535;
  height: 125px;
  padding: 0 12px;
`;

const FooterInner = styled.div`
  color: #fff;
  max-width: 1170px;
  margin: 0 auto;
  padding: 30px 0;
`;

const Paragraph = styled.p`
  color: #b3b3b3;
  font-size: 0.8125rem;
  font-weight: 300;
  line-height: 1.4;
`;

const Temp = styled.div`
  margin-top: 10px;
`;
