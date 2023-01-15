import React from 'react';
import { Model } from '../../types';
export interface ActionsModelProps {
  values: Model;
  isEdit?: boolean;
  setValue: React.Dispatch<React.SetStateAction<Model>>;
  addModelHandler: (e: React.FormEvent) => void;
  editModelHandler: (e: React.FormEvent) => void;
  editModel: Model | undefined | null;
}
