import styled from 'styled-components';
import Entity from '../../../game_data/types/Entity';

type EntitySelectorProps = {
  entities: Entity[];
};

const EntitySelector = ({ entities }: EntitySelectorProps) => {
  return (
    <EntitySelectorWrapper>
      {entities.map((entity, i) => {
        return (
          <option key={entity.uniqueName} value={i}>
            {entity.uniqueName}
          </option>
        );
      })}
    </EntitySelectorWrapper>
  );
};

export default EntitySelector;

const EntitySelectorWrapper = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 8px;
  border: solid 1px #979797;
  border-radius: 6px;
  display: flex;
  align-items: center;
  outline: none;
`;
