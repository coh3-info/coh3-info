import styled from 'styled-components';

type SelectButtonType = 'radio' | 'checkbox';

interface SelectButtonProps {
  type?: SelectButtonType;
  id: string;
  value?: string;
  name?: string;
  checked?: boolean;
  onSelect: (value: string) => void;
  color?: string;
}

const SelectButton = ({
  type = 'checkbox',
  id,
  value = id,
  name = '',
  checked = false,
  onSelect,
  children,
  color,
}: React.PropsWithChildren<SelectButtonProps>) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.value);
  };

  return (
    <>
      <Input type={type} id={id} value={value} name={name} onChange={onChange} checked={checked} color={color} />
      <Label type={type} htmlFor={id}>
        {children}
      </Label>
    </>
  );
};

export default SelectButton;

const Input = styled.input<{ color?: string }>`
  display: none;

  &:checked + label::before {
    background: radial-gradient(${({ color }) => color ?? '#000'} 3px, transparent 3px);
    border-color: ${({ color }) => color ?? '#000'};
  }
`;

const Label = styled.label<{ type: SelectButtonType }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.875rem;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border: solid 1px #000;
    border-radius: ${({ type }) => (type === 'radio' ? '10px' : '3px')};
    box-sizing: border-box;
  }
`;
