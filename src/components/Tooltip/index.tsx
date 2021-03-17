import React from 'react';

import { GoAlert } from 'react-icons/go';

import { Container } from './styles';

interface TooltipProps {
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ message }) => {
  return (
    <Container>
      <GoAlert size={20} color={'#c53030'} />
      <span>{message}</span>
    </Container>
  );
};

export default Tooltip;
