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

  .buttons {
    display: flex;

    svg {
      cursor: pointer;
      stroke-width: 3px;
    }

    svg + svg {
      margin-left: 20px;
    }
  }

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 10px 30px;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 960px) {
    flex-direction: column;

    .buttons {
      padding-top: 12px;
    }
  }
`;
