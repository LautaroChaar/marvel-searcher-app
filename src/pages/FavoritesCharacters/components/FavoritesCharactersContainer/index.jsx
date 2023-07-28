import { CharactersList } from '@/components';
import Error from '@/components/Error';
import CharactersContext from '@/context/charactersContext/characters.context';
import { SectionContainerStyled } from '@/styled-components/layout.styled.components';
import { useContext } from 'react';

const FavoritesCharactersContainer = () => {
  const { favCharacters } = useContext(CharactersContext);
  if (favCharacters.length === 0) {
    return <Error error={'No characters in favorites.'} />;
  }

  return (
    <SectionContainerStyled>
      <CharactersList />
    </SectionContainerStyled>
  );
};

export default FavoritesCharactersContainer;
