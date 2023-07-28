import { CharactersList } from '@/components';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { CharactersContext, SearchContext } from '@/context';
import useFetch from '@/hooks/useFetch';
import {
  getMarvelCharactersInParams,
  getRandomMarvelCharacters,
} from '@/services';
import { SectionContainerStyled } from '@/styled-components/layout.styled.components';
import { getResults } from '@/utils/constants';
import { generateRandomNumber } from '@/utils/randomNumber.utils';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomeCharactersContainer = () => {
  const { updateCharactersList } = useContext(CharactersContext);

  const { updateHasParams } = useContext(SearchContext);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const charactersQuery = queryParams.getAll('character');
  const comicsQuery = queryParams.getAll('comic');

  const randomNumber = generateRandomNumber(1561, 0);

  const { data, loading, error } = useFetch(
    getRandomMarvelCharacters(1, randomNumber),
  );

  const dataResults = getResults(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMarvelCharactersInParams(
        charactersQuery,
        comicsQuery,
      );
      Promise.all(response).then(response => {
        updateCharactersList(response.flat());
      });
    };

    if (data) {
      if (queryParams.size !== 0) {
        fetchData();
        updateHasParams(true);
      } else {
        updateCharactersList(dataResults);
        updateHasParams(false);
      }
    }
  }, [data]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error error={'Sorry, an error has occurred.'} />;
  }

  if (dataResults === 0) {
    return <Error error={'Characters not found.'} />;
  }

  return (
    <SectionContainerStyled>
      <CharactersList />
    </SectionContainerStyled>
  );
};

export default HomeCharactersContainer;
