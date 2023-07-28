import { MainStyled } from '@/styled-components/layout.styled.components';
import { FilteredCharactersContainer } from './components';

const FilteredCharacters = () => {
  return (
    <MainStyled data-testid='main'>
      <FilteredCharactersContainer />
    </MainStyled>
  );
};

export default FilteredCharacters;
