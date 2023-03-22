import styled from 'styled-components';

type EntitySelectorProps = {
  entityIds: string[];
  value: string;
  selectEntity: (uniqueName: string) => void;
};

const EntitySelector = ({ entityIds, value, selectEntity }: EntitySelectorProps) => {
  return (
    <EntitySelectorWrapper
      disabled={entityIds.length <= 1}
      value={value}
      onChange={(e) => selectEntity(e.target.value)}
    >
      {entityIds.map((entityId) => {
        return (
          <option key={entityId} value={entityId}>
            {entityId}
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
