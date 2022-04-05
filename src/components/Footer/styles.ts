import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: var(--blue);
  padding: 1.25rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  p {
    color: var(--light);
    font-size: 0.75rem;
  }
`;
