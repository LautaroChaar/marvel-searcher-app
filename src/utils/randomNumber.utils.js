export const generateRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
