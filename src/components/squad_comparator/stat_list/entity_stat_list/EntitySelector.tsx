import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectEntity } from '../../../../state_store/slice/squad_bookmark_manager';

type EntitySelectorProps = {
  options: {
    name: string;
    value: string;
    num: number;
  }[];
  defaultValue: string;
  position: 'left' | 'right';
};

const EntitySelector = ({ options, defaultValue, position }: EntitySelectorProps) => {
  const dispatch = useDispatch();

  const onSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectEntity({ id: e.target.value, position }));
  };

  return (
    <EntitySelectorWrapper disabled={options.length <= 1} value={defaultValue} onChange={onSelectOption}>
      {options.map((options) => {
        return (
          <option key={options.name} value={options.value}>
            {/*(*/}&#40;{options.num}&#41;{/*)*/} {options.name}
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
