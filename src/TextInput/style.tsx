import styled from 'styled-components';

import { rem } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${rem(14)};
  font-weight: 600;
  margin-bottom: ${rem(2)};
`;

export const Input = styled.input`
  background-color: #fff;
  color: #000;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: ${rem(16)};
  height: ${rem(30)};
  padding: ${rem(8)};
  margin-bottom: ${rem(16)};

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }

  &::placeholder {
    color: #ccc;
    padding-left: ${rem(4)};
  }
`;
