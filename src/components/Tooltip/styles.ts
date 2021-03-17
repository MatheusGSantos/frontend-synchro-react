import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  overflow: visible;

  svg {
    margin: 0;
    margin-left: 12px;
  }

  span {
    width: 200px;
    background-color: #c53030;
    padding: 8px;

    font-size: 14px;
    font-weight: 500;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    transform: translateX(-88%);
    color: #fff;
    overflow: visible;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 3px 0px 0 6px;
      top: 100%;
      right: 0;
      position: absolute;
    }
  }
  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
