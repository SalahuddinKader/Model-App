import { ModelListProps } from './type';
import ModelCard from '../ModelCard';
import TextInput from '../../TextInput';
import { Container, Box, ModelListText } from './style';

const ModelList: React.FC<ModelListProps> = ({
  models,
  setModels,
  searchTerm,
  searchHandler,

  findModelEditId,
}: ModelListProps) => {
  const getSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchHandler(e?.target?.value);
  };

  const renderModelList = models.map((model) => {
    return (
      <div key={model.id}>
        <ModelCard
          model={model}
          models={models}
          setModels={setModels}
          findModelEditId={findModelEditId}
        />
      </div>
    );
  });

  return (
    <Container>
      <TextInput
        data-testid="search_input"
        aria-label="search input"
        placeholder="Search"
        value={searchTerm}
        onChange={getSearchHandler}
      />
      {models.length > 0 && (
        <>
          <ModelListText>Model List: {models.length}</ModelListText>
          <Box />
        </>
      )}
      {renderModelList.length > 0 ? (
        renderModelList
      ) : (
        <ModelListText>No Models Available!</ModelListText>
      )}
    </Container>
  );
};

export default ModelList;
