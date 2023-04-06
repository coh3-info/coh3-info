import styled from 'styled-components';

const SquadListHeader = () => {
  return (
    <SquadListHeaderWrapper>
      <Category>
        <CategoryName>진영</CategoryName>
        <CheckboxesContainer>
          <div>
            <input id="us_forces" type="checkbox" />
            <label htmlFor="us_forces">미국</label>
          </div>
          <div>
            <input id="british_forces" type="checkbox" />

            <label htmlFor="british_forces">영국</label>
          </div>
          <div>
            <input id="wehrmacht" type="checkbox" />
            <label htmlFor="wehrmacht">독일 국방군</label>
          </div>
          <div>
            <input id="afrikakorps" type="checkbox" />
            <label htmlFor="afrikakorps">아프리카 군단</label>
          </div>
        </CheckboxesContainer>
      </Category>
      <Category>
        <CategoryName>분대 타입</CategoryName>
        <CheckboxesContainer>
          <div>
            <input id="infantry" type="checkbox" />
            <label htmlFor="infantry">보병</label>
          </div>
          <div>
            <input id="team_weapon" type="checkbox" />
            <label htmlFor="team_weapon">지원화기</label>
          </div>
          <div>
            <input id="vehicle" type="checkbox" />
            <label htmlFor="vehicle">차량</label>
          </div>
        </CheckboxesContainer>
      </Category>
      <div>
        <input placeholder="분대 이름으로 검색" />
      </div>
    </SquadListHeaderWrapper>
  );
};

export default SquadListHeader;

const SquadListHeaderWrapper = styled.div`
  padding: 20px;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Category = styled.div`
  display: flex;
`;

const CategoryName = styled.div`
  margin-right: 20px;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  gap: 10px;
`;
