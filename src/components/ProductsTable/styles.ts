import styled from "styled-components";

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }

    h1 {
      font-weight: 400;
      font-size: 1.25rem;
    }

    button {
      width: 155px;
      height: 40px;
      background: var(--light);
      border: 1px solid var(--black);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.0625rem;
      border-radius: 0.3125rem;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0;
    border-radius: 5px;
    margin-top: 25px;
    th {
      color: #1c1c1c;
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      background: #fafafa;
      border: 1px solid #f0f0f0;
    }
    td {
      padding: 1rem 2rem;
      border: 1px solid #f0f0f0;
      background: #fff;
      color: #1c1c1c;
    }
  }
`;

export const ContainerSkeleton = styled.div`
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;