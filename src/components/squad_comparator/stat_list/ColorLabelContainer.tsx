import styled from 'styled-components';

const ColorLabelContainer = () => {
  return (
    <ColorLabelContainerWrapper>
      <LeftLabelContainer>
        <LeftLabel />
      </LeftLabelContainer>
      <EmptyBox />
      <RightLabelContainer>
        <RightLabel />
      </RightLabelContainer>
    </ColorLabelContainerWrapper>
  );
};

export default ColorLabelContainer;

const ColorLabelContainerWrapper = styled.li`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const EmptyBox = styled.div`
  flex-basis: 40%;
`;

const LabelContainer = styled.div`
  flex-basis: 30%;
`;

const LeftLabelContainer = styled(LabelContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightLabelContainer = styled(LabelContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Label = styled.div`
  width: 20px;
  height: 8px;
  border-radius: 8px;
`;

const LeftLabel = styled(Label)`
  background-color: #5f68c8;
`;

const RightLabel = styled(Label)`
  background-color: #ff5e5e;
`;
