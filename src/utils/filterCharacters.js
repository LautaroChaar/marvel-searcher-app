export const filterCharacters = (arr, arr2) => {
  return arr.concat(arr2).reduce((accumulator, current) => {
    const isDuplicate = accumulator.some(item => item.id === current.id);
    if (!isDuplicate) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
};
