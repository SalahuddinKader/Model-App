import { ReactNode } from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  id?: string;
  type?: 'text' | 'number' | 'search';
  name?: string;
}
