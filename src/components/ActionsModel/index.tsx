import React, { useEffect } from 'react';
import { ActionsModelProps } from './types';
import TextInput from '../../TextInput';
import Button from '../../Button';

import { Container, Box } from './style';

const ActionsModel: React.FC<ActionsModelProps> = ({
  edit,
  values,
  editModel,
  setValue,
  editModelHandler,
  addModelHandler,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const disableBtn = !values.name || !values.suite;

  useEffect(() => {
    if (editModel) {
      setValue(editModel);
    }
  }, [editModel]);

  return (
    <Container>
      <form onSubmit={edit ? editModelHandler : addModelHandler}>
        <TextInput
          data-testid="model_name"
          aria-label="model name"
          placeholder="Some Model Name"
          value={values.name}
          onChange={onChangeHandler}
          name="name"
        />
        <TextInput
          data-testid="model_suite"
          aria-label="model suite"
          placeholder="Some Suite Name"
          value={values.suite}
          onChange={onChangeHandler}
          name="suite"
        />
        <TextInput
          data-testid="model_last_run_status"
          aria-label="model last run status"
          placeholder="Last Run Status"
          value={values.last_run_status}
          onChange={onChangeHandler}
          name="last_run_status"
        />
        <Box>
          <Button
            type="submit"
            fullWidth
            size="large"
            disabled={disableBtn}
            aria-label={edit ? 'update model' : 'addn model'}
            data-testid={edit ? 'update_model_btn' : 'add_model_btn'}
          >
            {edit ? 'Update Model' : 'Add Model'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ActionsModel;
