import { Env } from '@/config/Env';

export const getRandomMarvelCharacters = (limit, offset) => {
  return `${Env.MARVEL_API}/characters?limit=${limit}&offset=${offset}&${Env.MARVEL_API_KEY}`;
};

export const setMarvelCharacterId = id => {
  return `${Env.MARVEL_API}/characters/${id}?${Env.MARVEL_API_KEY}`;
};

export const getMarvelCharacterById = array => {
  return array.map(async item => {
    return await fetch(item.url)
      .then(response => response.json())
      .then(data => {
        return data?.data?.results;
      });
  });
};

export const getFilteredMarvelCharacters = name => {
  return `${Env.MARVEL_API}/characters?nameStartsWith=${name}&${Env.MARVEL_API_KEY}`;
};

export const getMarvelComicById = id => {
  return `${Env.MARVEL_API}/comics/${id}?${Env.MARVEL_API_KEY}`;
};

export const getMarvelComicByTitle = title => {
  return `${Env.MARVEL_API}/comics?title=${title}&${Env.MARVEL_API_KEY}`;
};

export const getMarvelCharactersInParams = (characters, comics) => {
  return characters.map(async character => {
    return await fetch(
      `${Env.MARVEL_API}/characters?name=${character}&${Env.MARVEL_API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        return data?.data?.results.map(personaje => {
          const comicsWithId = personaje.comics.items
            .map(({ resourceURI, name }) => ({
              id: Number(resourceURI.split('/').pop()),
              name,
            }))
            .filter(comic => comics.includes(comic.name));

          return {
            ...personaje,
            comics: {
              items: comicsWithId,
            },
          };
        });
      });
  });
};

export const getCharacterComicsInParams = comics => {
  return comics.map(async comic => {
    return await fetch(
      `${Env.MARVEL_API}/comics/${comic.id}?&${Env.MARVEL_API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        return data?.data?.results;
      });
  });
};

export const getCharacterComic = id => {
  return `${Env.MARVEL_API}/characters/${id}/comics?orderBy=onsaleDate&${Env.MARVEL_API_KEY}`;
};
