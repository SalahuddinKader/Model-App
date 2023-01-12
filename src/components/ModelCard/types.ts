import { Model } from '../../types';

export interface ModelCardProps {
  model: Model;
  models: Model[];
  findModelEditId: (id: number) => void;
  setModels: React.Dispatch<React.SetStateAction<Model[]>>;
}
