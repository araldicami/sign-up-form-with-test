import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  min-height: 100vh;

  h1,
  p {
    color: #fff;
    max-width: 560px;
  }

  h1 {
    font-size: 48px;
  }

  .free-trial-info {
    background-color: var(--blue);
    text-align: center;
    color: #fff;
    margin-bottom: 16px;
    min-width: 380px;
    padding: 12px;
    border-radius: 4px;

    strong {
      font-weight: 600;
    }
  }

  form {
    background-color: #fff;

    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    border-radius: 4px;

    input {
      padding: 12px;
      border-radius: 4px;
      border: 1px solid var(--grayish-blue);
      width: 100%;

      margin-bottom: 16px;

      &::placeholder {
        font-weight: 600;
      }
    }

    button {
      background-color: var(--green);
      border: 0;
      color: #fff;
      padding: 12px;
      cursor: pointer;
      border-radius: 4px;

      min-width: 380px;
      text-transform: uppercase;
    }

    small {
      font-size: 10px;
      align-self: center;
      margin-top: 16px;
      color: var(--grayish-blue);

      a {
        color: var(--red);
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
`;
