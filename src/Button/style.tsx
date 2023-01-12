import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonProps } from './types';
import { rem } from 'polished';

const StyleButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 2px;
  border: 2px solid transparent;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  font-weight: 500;
  color: #fff;

  &:hover,
  &:focus {
    outline: 0;
  }

  ${({ styleType }): FlattenSimpleInterpolation => {
    switch (styleType) {
      case 'primary':
        return css`
          background-color: #4a90e2;
          border-color: #4a90e2;
          &:hover {
            background-color: #4a80e2;
            border-color: #4a90e2;
          }
        `;
      case 'secondary':
        return css`
          background-color: #fff;
          border-color: #4a90e2;
          color: #4a90e2;
          &:hover {
            background-color: #4a80e2;
            border-color: #4a90e2;
            color: #fff;
          }
        `;
      case 'danger':
        return css`
          background-color: #ff0000;
          border-color: #ff0000;
          &:hover {
            background-color: #ff2000;
            border-color: #ff0000;
          }
        `;

      default:
        return css`
          background-color: #4a90e2;
          border-color: #4a90e2;
          &:hover {
            background-color: #4a90e2;
            border-color: #4a90e2;
          }
        `;
    }
  }}

  ${({ size }): FlattenSimpleInterpolation => {
    switch (size) {
      case 'small':
        return css`
          font-size: ${rem(14)};
          font-weight: 600;
          padding: ${rem(10)} ${rem(15)};
          width: ${rem(80)};
        `;
      case 'medium':
        return css`
          font-size: ${rem(16)};
          font-weight: 600;
          padding: ${rem(10)} ${rem(15)};
          width: ${rem(100)};
        `;
      case 'large':
        return css`
          font-size: ${rem(17)};
          font-weight: 600;
          padding: ${rem(10)} ${rem(15)};
          width: ${rem(150)};
        `;
      default:
        return css`
          font-size: ${rem(14)};
          padding: ${rem(10)} ${rem(20)};
          width: ${rem(80)};
        `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
  }}

  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        @media (max-width: 480px) {
          width: 100%;
        }
      `;
    }
  }}
`;

export default StyleButton;
