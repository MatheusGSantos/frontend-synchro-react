import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ToggleProps {
  toggleState: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  > img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #list-inner-content,
  #create-inner-content {
    width: 80%;
    max-width: 1015px;
    min-width: 320px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  div {
    background-color: #ecf1ed;
    border: 1px solid #d9d9d9;
    border-radius: 8px 0 0 8px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    width: 100%;

    input {
      background: transparent;
      border: 0;
      color: #747474;
      width: 100%;

      &::placeholder {
        color: #a1a1a1;
        font-size: 0.875rem;
      }
    }
  }

  a {
    display: flex;
    background-color: #69b72a;
    width: 84px;
    height: 45px;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 0 8px 8px 0;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${shade(0.2, '#69b72a')};
    }
  }
`;

export const TableContainer = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  width: 100%;
  max-height: 400px;
`;

export const Toggle = styled.div<ToggleProps>`
  color: black;
  display: flex;

  margin-top: 2rem;
  margin-bottom: 3rem;
  width: 90%;
  max-width: 440px;

  button {
    border: 1px solid #939393;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    width: 50%;
    transition: all 0.2s ease-in-out;
  }

  #list {
    border-radius: 8px 0 0 8px;
  }

  #create {
    border-radius: 0 8px 8px 0;
  }

  ${props =>
    props.toggleState
      ? css`
          #create {
            background-color: #3b698c;
            color: #fff;
            &:hover {
              background-color: ${shade(0.2, '#3b698c')};
            }
          }

          #list {
            background-color: #fff;
            color: #525252;
            &:hover {
              background-color: #e6e7f1;
            }
          }
        `
      : css`
          #list {
            background-color: #3b698c;
            color: #fff;
            &:hover {
              background-color: ${shade(0.2, '#3b698c')};
            }
          }

          #create {
            background-color: #fff;
            color: #525252;
            &:hover {
              background-color: #e6e7f1;
            }
          }
        `}
`;
