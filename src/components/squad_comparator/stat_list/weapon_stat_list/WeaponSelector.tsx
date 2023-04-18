import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectWeapon } from '../../../../state_store/slice/squad_bookmark_manager';

type WeaponSelectorProps = {
  options: {
    name: string;
    value: string;
  }[];
  defaultValue: string;
  position: 'left' | 'right';
};

const WeaponSelector = ({ options, defaultValue, position }: WeaponSelectorProps) => {
  const dispatch = useDispatch();

  const onSelectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectWeapon({ id: e.target.value, position }));
  };

  return (
    <WeaponSelectorWrapper disabled={options.length <= 1} value={defaultValue} onChange={onSelectOption}>
      {options.map((options) => {
        return (
          <option key={options.name} value={options.value}>
            {options.name}
          </option>
        );
      })}
    </WeaponSelectorWrapper>
  );
};

export default WeaponSelector;

const WeaponSelectorWrapper = styled.select`
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
