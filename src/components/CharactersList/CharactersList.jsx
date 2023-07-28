import CharactersContext from '@/context/charactersContext/characters.context';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Character from '../Character';

const CharactersList = () => {
  const { charactersList, favCharacters } = useContext(CharactersContext);

  const location = useLocation();

  if (location.pathname === '/characters/favorites') {
    return (
      favCharacters.length > 0 &&
      favCharacters.map(character => (
        <Character key={character.id} character={character} />
      ))
    );
  }

  return (
    <>
      {charactersList.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </>
  );
};

export default CharactersList;
