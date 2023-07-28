import { createAddaptedComics } from '@/adapters/createAddaptedComics';
import { CharactersList } from '@/components';
import Error from '@/components/Error';
import Loading from '@/components/Loading';
import { CharactersContext, SearchContext } from '@/context';
import useFetch from '@/hooks/useFetch';
import {
  getFilteredMarvelCharacters,
  getMarvelCharacterById,
  getMarvelComicByTitle,
} from '@/services';
import { SectionContainerStyled } from '@/styled-components/layout.styled.components';
import { getResults, getResultsLength } from '@/utils/constants';
import { filterCharacters } from '@/utils/filterCharacters';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilteredCharactersContainer = () => {
  const { updateCharactersList, charactersList } =
    useContext(CharactersContext);

  const { searchValue, updateHasParams } = useContext(SearchContext);
  const [nameParam, setNameParam] = useState(useParams().nameStartsWith);
  const [fetchingCharacters, setFetchingCharacters] = useState(false);

  const { data, loading, error } = useFetch(
    getFilteredMarvelCharacters(nameParam),
    [nameParam],
  );

  const {
    data: comicData,
    loading: loadingComic,
    error: comicError,
  } = useFetch(getMarvelComicByTitle(nameParam), [nameParam]);

  const charactersLength = getResultsLength(data);
  const comicsLength = getResultsLength(comicData);
  const characters = getResults(data);
  const comics = getResults(comicData);

  useEffect(() => {
    if (searchValue !== '') {
      setNameParam(searchValue);
      updateHasParams(false);
    }
  }, [searchValue]);

  useEffect(() => {
    const fetchData = async arr => {
      const response = await getMarvelCharacterById(arr);
      return Promise.all(response.flat());
    };

    let formattedComics;
    let filterData;

    switch (true) {
      case charactersLength > 0 && comicsLength > 0:
        formattedComics = createAddaptedComics(comics);
        setFetchingCharacters(true);
        fetchData(formattedComics).then(response => {
          filterData = filterCharacters(response.flat(), characters);
          updateCharactersList(filterData);
          setFetchingCharacters(false);
        });
        break;
      case charactersLength > 0 && comicsLength === 0:
        updateCharactersList(characters);
        break;
      case charactersLength === 0 && comicsLength > 0:
        formattedComics = createAddaptedComics(comics);
        setFetchingCharacters(true);
        fetchData(formattedComics).then(response => {
          updateCharactersList(response.flat());
          setFetchingCharacters(false);
        });
        break;
      default:
        updateCharactersList([]);
        break;
    }
  }, [data, comicData]);

  if (loading || loadingComic || fetchingCharacters) {
    return <Loading />;
  }

  if (error || comicError) {
    return <Error error={'Sorry, an error has occurred.'} />;
  }

  if (charactersList.length === 0) {
    return <Error error={'Characters not found.'} />;
  }

  return (
    <SectionContainerStyled>
      <CharactersList />
    </SectionContainerStyled>
  );
};

export default FilteredCharactersContainer;
