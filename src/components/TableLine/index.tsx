import React from 'react';

import { Container } from './styles';

interface TableLineProps {
  bgColor: string;
  fontSize: string;
  fontColor: string;
  border?: string;
}

const TableLine: React.FC<TableLineProps> = ({
  bgColor,
  fontSize,
  fontColor,
  border,
}) => {
  return (
    <Container
      bg_color={bgColor}
      font_size={fontSize}
      font_color={fontColor}
      border={border}
    >
      <div className="column">
        <h2>ID</h2>
      </div>
      <div className="column">
        <h2>Name</h2>
      </div>
      <div className="column">
        <h2>Email</h2>
      </div>
    </Container>
  );
};

export default TableLine;
