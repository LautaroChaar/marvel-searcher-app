export const getResultsLength = value => value?.data?.results.length;
export const getResults = value => value?.data?.results;
export const getFirstResults = value => value?.data?.results[0];
export const getComicList = value => value.comics.items;
export const REG_EXP = /^https:\/\/www\.marvel\.com\/comics\/issue\/(\d+)/;
