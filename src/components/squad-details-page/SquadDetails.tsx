import styled from 'styled-components';
import Controller from './controller/Controller';

const SquadDetails = () => {
  return (
    <SquadDetailsWrapper>
      <InfoWrapper>
        <ControllersContainer>
          <Controller />
          <Controller />
        </ControllersContainer>
      </InfoWrapper>
    </SquadDetailsWrapper>
  );
};

export default SquadDetails;

const SquadDetailsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 20px;
`;

const InfoWrapper = styled.div`
  max-width: 1080px;
`;

const ControllersContainer = styled.div`
  display: flex;
  gap: 20px;
`;
