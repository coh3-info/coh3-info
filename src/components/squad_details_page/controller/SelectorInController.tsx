import styled from 'styled-components';

type SelectorInControllerProp = {
  options: {
    name: string;
    value: string;
  }[];
  defaultValue: string;
  selectOption: (value: string) => void;
};

const SelectorInController = ({ options, defaultValue, selectOption }: SelectorInControllerProp) => {
  return (
    <EntitySelectorWrapper
      disabled={options.length <= 1}
      value={defaultValue}
      onChange={(e) => selectOption(e.target.value)}
    >
      {options.map((options) => {
        return (
          <option key={options.name} value={options.value}>
            {options.name}
          </option>
        );
      })}
    </EntitySelectorWrapper>
  );
};

export default SelectorInController;

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
