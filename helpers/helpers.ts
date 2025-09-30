export const firstLetterCapitalized = (str: string) =>
  str.substring(0, 1).toUpperCase();

export const toTwoDigits = (num: number) => num.toString().padStart(2, '0');
