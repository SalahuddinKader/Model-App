import { useState } from 'react';
import Header from './components/Header/Header';
import { Model } from './types';
import ActionsModel from './components/ActionsModel';
import ModelList from './components/ModelList';

import './App.css';

function App() {
  const [values, setValue] = useState<Model>({
    id: 0,
    name: '',
    suite: '',
    last_run_status: 'Passed',
  });
  const [models, setModels] = useState<Model[]>([]);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [editModel, setEditModel] = useState<null | Model | undefined>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchModels, setSearchModels] = useState<Model[]>([]);

  const addModelHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (values) {
      setModels([
        ...models,
        {
          name: values.name,
          suite: values.suite,
          last_run_status: values.last_run_status,
          id: models.length + 1,
        },
      ]);
      setValue({ id: 0, name: '', suite: '', last_run_status: 'Passed' });
    }
  };

  const findModelEditId = (id: number) => {
    const modelToEdit = models.find((model) => model.id === id);
    setEditModel(modelToEdit);
    setEdit(true);
  };

  const editModelHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (editModel) {
      const newModels = models.map((model) =>
        model.id === editModel.id ? values : model
      );
      setModels(newModels);
      setEditModel(null);
      setEdit(false);
      setValue({ id: 0, name: '', suite: '', last_run_status: 'Passed' });
    }
  };

  /**
   * Search Handler
   * @description
   * This function is used to search the model list
   */

  /** */
  const searchHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== '') {
      const newModel = models.filter((model) => {
        return Object.values(model)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchModels(newModel);
    }
    setSearchModels(models);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Eggplant Models App</h1>

        <ActionsModel
          values={values}
          isEdit={isEdit}
          editModel={editModel}
          setValue={setValue}
          editModelHandler={editModelHandler}
          addModelHandler={addModelHandler}
        />

        <ModelList
          models={searchTerm.length < 1 ? models : searchModels}
          setModels={setModels}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchHandler={searchHandler}
          findModelEditId={findModelEditId}
        />
      </main>
    </div>
  );
}

export default App;
