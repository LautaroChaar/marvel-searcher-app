import { CharactersList } from '@/components';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { CharactersContext } from '@/context';
import useFetch from '@/hooks/useFetch';
import { getRandomMarvelCharacters } from '@/services';
import { SectionContainerStyled } from '@/styled-components/layout.styled.components';
import { getResults } from '@/utils/constants';
import { generateRandomNumber } from '@/utils/randomNumber.utils';
import { useContext, useEffect } from 'react';

const RandomCharactersContainer = () => {
  const { updateCharactersList } = useContext(CharactersContext);

  const randomNumber = generateRandomNumber(1561, 0);

  const { data, loading, error } = useFetch(
    getRandomMarvelCharacters(10, randomNumber),
  );

  const dataResults = getResults(data);

  useEffect(() => {
    if (data) {
      updateCharactersList(dataResults);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={'Sorry, an error has occurred.'} />;
  }

  if (dataResults === 0) {
    return <Error error={'Characters not found.'} />;
  }

  return (
    <SectionContainerStyled data-testid='randomCharactersContainer'>
      <CharactersList />
    </SectionContainerStyled>
  );
};

export default RandomCharactersContainer;
