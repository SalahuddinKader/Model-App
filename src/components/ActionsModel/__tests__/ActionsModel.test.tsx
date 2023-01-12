import { render, screen } from '@testing-library/react';
import { Model } from '../../../types';

import ActionsModel from '../index';

describe('ActionsModel', () => {
  it('ActionsModel should render  ', () => {
    const values: Model = {
      id: 0,
      name: '',
      suite: '',
      last_run_status: 'Passed',
    };
    const edit = false;
    const editModel = null;
    const setValue = () => {};
    const editModelHandler = () => {};
    const addModelHandler = () => {};
    render(
      <ActionsModel
        edit={edit}
        values={values}
        editModel={editModel}
        setValue={setValue}
        editModelHandler={editModelHandler}
        addModelHandler={addModelHandler}
      />
    );

    expect(screen.getByText('Some Model Name')).toBeTruthy();
    expect(screen.getByText('Some Suite Name')).toBeTruthy();
    expect(screen.getByText('Last Run Status')).toBeTruthy();
    expect(screen.getByText('Add Model')).toBeTruthy();
  });
});
