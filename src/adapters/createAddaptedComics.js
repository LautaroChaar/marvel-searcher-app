import { setMarvelCharacterId } from '@/services';

export const createAddaptedComics = comics => {
  const formattedComics = comics
    .map(obj => {
      return obj.characters.items.map(({ resourceURI, name }) => ({
        id: Number(resourceURI.split('/').pop()),
        name,
      }));
    })
    .flat()
    .reduce((accumulator, current) => {
      const isDuplicate = accumulator.some(item => item.name === current.name);
      if (!isDuplicate) {
        accumulator.push({
          id: current.id,
          name: current.name,
          url: setMarvelCharacterId(current.id),
        });
      }
      return accumulator;
    }, []);

  return formattedComics;
};
