import { ReactNode } from 'react';

export type SizeType = 'small' | 'medium' | 'large';
export type StyleType = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  type?: 'button' | 'submit';
  styleType?: StyleType;
  size?: SizeType;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
}
