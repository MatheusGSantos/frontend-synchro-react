import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { InputContainer } from './styles';

import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import Tooltip from 'components/Tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer isErrored={!!error}>
      {Icon && <Icon size={24} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <Tooltip message={error} />}
    </InputContainer>
  );
};

export default Input;
