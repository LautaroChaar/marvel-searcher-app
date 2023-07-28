import { MainStyled } from '@/styled-components/layout.styled.components';
import { FavoritesCharactersContainer } from './components';

const FavoritesCharacters = () => {
  return (
    <MainStyled data-testid='main'>
      <FavoritesCharactersContainer />
    </MainStyled>
  );
};

export default FavoritesCharacters;
