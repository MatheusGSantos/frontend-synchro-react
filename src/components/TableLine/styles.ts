import styled, { css } from 'styled-components';

interface TableLineProps {
  bg_color: string;
  font_size: string;
  font_color: string;
  border?: string;
}

export const Container = styled.div<TableLineProps>`
  ${props =>
    css`
      background-color: ${props.bg_color};
      color: ${props.font_color};
      h2 {
        font-size: ${props.font_size};
      }
    `}

  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}

  .column {
    flex: 1;

    :not(:last-child) {
      padding-right: 4px;
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 10px 30px;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;
