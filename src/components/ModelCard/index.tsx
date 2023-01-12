import { ModelCardProps } from './types';
import { AiFillFire } from 'react-icons/ai';
import Button from '../../Button';
import { Container, Box, Content, Text, Sidebar } from './style';

const ModelCard: React.FC<ModelCardProps> = ({
  model,
  models,
  setModels,
  findModelEditId,
}: ModelCardProps) => {
  const { id, name, suite, last_run_status } = model;

  const handleModelEdit = (id: number) => {
    findModelEditId(id);
  };

  const handleModelDelete = (id: number) => {
    const newModels = models.filter((model) => model.id !== id);
    setModels(newModels);
  };

  return (
    <Container>
      <Box>
        <AiFillFire size={30} />
      </Box>
      <Content>
        <Text>{name}</Text>
        <Text>Suite: {suite}</Text>
        <Text>Last Run Status: {last_run_status}</Text>
      </Content>
      <Sidebar>
        <Button
          data-testid="edit_model_btn"
          aria-label="edit model"
          styleType="primary"
          fullWidth
          onClick={() => handleModelEdit(id)}
        >
          Edit
        </Button>
      </Sidebar>
      <Sidebar>
        <Button
          data-testid="delete_model_btn"
          aria-label="delete model"
          styleType="danger"
          fullWidth
          onClick={() => handleModelDelete(id)}
        >
          Delete
        </Button>
      </Sidebar>
    </Container>
  );
};

export default ModelCard;
