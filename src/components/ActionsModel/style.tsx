import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Box = styled.div`
  margin-bottom: 2rem;
`;
