import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    140deg,
    rgba(70, 140, 196, 1) 0%,
    rgba(164, 215, 125, 1) 100%
  );

  form {
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(4px);

    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    width: 60%;
    min-width: 340px;
    max-width: 500px;

    h1 {
      color: #053152;
      margin-bottom: 4rem;
      font-weight: 500;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-top: 3rem;
      border: none;
      border-radius: 8px;
      padding: 10px 70px;
      transition: background-color 0.2s ease-in-out;
      background-color: #69b72a;

      &:hover {
        background-color: ${shade(0.2, '#69b72a')};
      }

      @media only screen and (max-width: 960px) {
        width: 80%;
        max-width: 480px;
      }
    }
  }
`;
