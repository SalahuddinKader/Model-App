import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  & > * {
    border: 1px solid #e0e0e0;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.3fr 0.3fr;
  }
`;

export const Navbar = styled.div`
  background-color: #e0e0e0;
  height: ${rem(25)};
`;

export const Box = styled.div`
  text-align: center;
  padding: ${rem(10)};
`;

export const Content = styled.div`
  text-align: start;
  padding-left: ${rem(20)};
  padding-top: ${rem(10)};

  & > *:first-child {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Sidebar = styled.div`
  padding: ${rem(10)};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 0;
`;
