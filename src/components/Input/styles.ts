import styled, { css } from 'styled-components';

interface InputProps {
  isErrored: boolean;
}

export const InputContainer = styled.div<InputProps>`
  width: 80%;
  max-width: 480px;
  display: flex;
  align-items: center;
  background-color: #ecf1ed;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #d9d9d9;
  overflow: visible;

  & + div {
    margin-top: 16px;
  }

  input {
    background: transparent;
    border: 0;
    color: #747474;
    flex: 1;

    &::placeholder {
      color: #a1a1a1;
      font-size: 0.875rem;
    }
  }

  svg {
    color: black;
    margin-right: 14px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #ce1446;
    `}
`;
