import styled from "styled-components";

export const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  margin-top: 50px;

  h1 {
    text-align: center;
    color: var(--black);
    font-size: 1.5rem;
    font-weight: 500;
  }

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 30px;

    div {
      max-width: 198px;

      label {
        font-size: 1rem;
        font-weight: 500;
      }

      input,
      select {
        height: 40px;
        padding: 12px;
        border-radius: 0.3125rem;
        border: 1px solid var(--gray);
        margin-top: 10px;
      }
    }

    div:nth-child(8) {
      display: flex;
      gap: 1.5rem;

      button {
        width: 87px;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--light);
        border: 1px solid var(--black);
        color: var(--black);
        border-radius: 5px;
        font-weight: 500;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
