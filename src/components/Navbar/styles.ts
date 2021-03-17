import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 340px;
  height: 59px;
  background-color: #053152;
  display: flex;
  align-items: center;
  padding: 0 26px;
  justify-content: space-between;

  #logo {
    display: flex;
    align-items: center;
    img {
      width: 35px;
      margin-right: 0.3125rem;
    }

    h1 {
      font-size: 1.375rem;
    }
  }
`;

export const UserLogged = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #69b72a;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
