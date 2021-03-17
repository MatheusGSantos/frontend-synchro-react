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
    padding: 4rem 0;
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

    h3 {
      color: #04253d;
      font-weight: 500;
      margin: 0.2rem 0;
    }

    h3:last-of-type {
      margin-bottom: 3rem;
    }

    .title {
      color: #4f911a;
      margin-top: 1rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-top: 2rem;
      border: none;
      border-radius: 8px;
      padding: 10px 70px;
      transition: background-color 0.2s ease-in-out;
      background-color: #8a2eff;

      &:hover {
        background-color: ${shade(0.2, '#8A2EFF')};
      }

      @media only screen and (max-width: 960px) {
        width: 80%;
        max-width: 480px;
      }
    }
  }
`;
