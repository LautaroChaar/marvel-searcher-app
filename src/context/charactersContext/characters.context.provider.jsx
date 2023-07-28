import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CharactersContext from './characters.context';

const FAV_CHARACTERS = JSON.parse(localStorage.getItem('favorites') || '[]');
const CharactersContextProvider = ({ children }) => {
  const [charactersList, setCharactersList] = useState([]);
  const [queryCharacters, setQueryCharacters] = useState([]);
  const [queryComics, setQueryComics] = useState([]);
  const [comicsList, setComicsList] = useState([]);
  const [favCharacters, setFavCharacters] = useState(FAV_CHARACTERS);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favCharacters));
  }, [favCharacters]);

  const updateCharactersList = value => setCharactersList(value);

  const updateQueryCharacters = value => setQueryCharacters(value);

  const updateQueryComics = value => setQueryComics(value);

  const updateComics = value => setComicsList(value);

  const isInFavorites = characterId =>
    favCharacters.some(character => character.id === characterId);

  const updateFavCharacters = character => {
    if (isInFavorites(character.id)) {
      removeFavCharacter(character);
    } else {
      addFavCharacter(character);
    }
  };

  const addFavCharacter = character => {
    setFavCharacters(prevFavCharacters => [...prevFavCharacters, character]);
  };

  const removeFavCharacter = character => {
    setFavCharacters(prevFavCharacters =>
      prevFavCharacters.filter(
        favCharacter => favCharacter.id !== character.id,
      ),
    );
  };

  return (
    <CharactersContext.Provider
      value={{
        charactersList,
        queryCharacters,
        queryComics,
        comicsList,
        favCharacters,
        updateQueryCharacters,
        updateCharactersList,
        updateQueryComics,
        updateComics,
        updateFavCharacters,
        isInFavorites,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

CharactersContextProvider.propTypes = {
  children: PropTypes.element,
};

export default CharactersContextProvider;
