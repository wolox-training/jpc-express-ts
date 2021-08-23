import axiosRequest from '../utils/axios';

export async function info(): Promise<object> {
  const response = await axiosRequest('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': '3b806bf63bmshc2126c8b0b88f04p18fb0fjsn32b21a2c58ca'
  });
  return response;
}

export async function cards(): Promise<object> {
  const response = await axiosRequest('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': '3b806bf63bmshc2126c8b0b88f04p18fb0fjsn32b21a2c58ca'
  });
  return response;
}
