import { MainStyled } from '@/styled-components/layout.styled.components';
import { RandomCharactersContainer } from './components';

const RandomCharacters = () => {
  return (
    <MainStyled data-testid='main'>
      <RandomCharactersContainer />
    </MainStyled>
  );
};

export default RandomCharacters;
