import { render, screen } from '@testing-library/react';
import { Model } from '../../../types';

import ModelCard from '../index';

describe('ModelCard', () => {
  it('ModelCard should render  ', () => {
    const model: Model = {
      id: 0,
      name: 'test',
      suite: 'test',
      last_run_status: 'Passed',
    };
    render(
      <ModelCard
        model={model}
        models={[]}
        findModelEditId={() => {}}
        setModels={() => {}}
      />
    );

    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.getByText('test')).toBeTruthy();
    expect(screen.getByText('Edit')).toBeTruthy();
    expect(screen.getByText('Delete')).toBeTruthy();
  });

  it('should call findModelEditId', () => {
    const model: Model = {
      id: 0,
      name: 'test',
      suite: 'test',
      last_run_status: 'Passed',
    };
    const findModelEditId = () => {};
    render(
      <ModelCard
        model={model}
        models={[]}
        findModelEditId={findModelEditId}
        setModels={() => {}}
      />
    );

    const editButton = screen.getByTestId('edit_model_btn');
    editButton.click();
    expect(findModelEditId);
  });
});
