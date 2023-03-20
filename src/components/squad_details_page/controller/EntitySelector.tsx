import styled from 'styled-components';
import Entity from '../../../game_data/types/Entity';

type EntitySelectorProps = {
  entities: Entity[];
  value: string;
  selectEntity: (uniqueName: string) => void;
};

const EntitySelector = ({ entities, value, selectEntity }: EntitySelectorProps) => {
  return (
    <EntitySelectorWrapper disabled={entities.length <= 1} value={value} onChange={(e) => selectEntity(e.target.value)}>
      {entities.map((entity) => {
        return (
          <option key={entity.uniqueName} value={entity.uniqueName}>
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

  &:disabled {
    color: inherit;
    appearance: none;
  }
`;
