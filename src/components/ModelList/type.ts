import { Model } from '../../types';

export interface ModelListProps {
  models: Model[];
  searchTerm: string;
  findModelEditId: (id: number) => void;
  setModels: React.Dispatch<React.SetStateAction<Model[]>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchHandler: (searchTerm: string) => void;
}
