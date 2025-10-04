import { Time24 } from '@/app/alarm/[id]';

export const firstLetterCapitalized = (str: string) =>
  str.substring(0, 1).toUpperCase();

export const timeStrToObj = (str: string): Time24 => {
  const hours = parseInt(str.substring(0, 2));
  const minutes = parseInt(str.substring(3, 5));
  return { hours, minutes };
};

export const toTwoDigits = (num: number) => num.toString().padStart(2, '0');
