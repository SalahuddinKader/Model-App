import { useState, FocusEvent } from 'react';
import { InputProps } from './types';

import { Container, Input, Label } from './style';

const TextInput: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  name,
  placeholder,
  label,
  id,
  ...rest
}) => {
  return (
    <Container>
      <Label htmlFor={id}>{placeholder}</Label>

      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

export default TextInput;
