import styled from 'styled-components';

type SelectButtonType = 'radio' | 'checkbox';

interface SelectButtonProps {
  type?: SelectButtonType;
  id?: string;
  name?: string;
  value: string;
  checked?: boolean;
  onSelect: (value: string) => void;
}

const ComparationRadiobutton = ({
  type = 'checkbox',
  value,
  id = value,
  name = '',
  checked = false,
  onSelect,
  children,
}: React.PropsWithChildren<SelectButtonProps>) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.value);
  };

  return (
    <>
      <Input type={type} id={id} value={value} name={name} onChange={onChange} checked={checked} />
      <Label type={type} htmlFor={id}>
        {children}
      </Label>
    </>
  );
};

export default ComparationRadiobutton;

const Input = styled.input`
  display: none;

  &:checked + label::before {
    /* background-clip: padding-box; */
    padding: 3px;
    background: radial-gradient(#000 3px, transparent 3px);
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
