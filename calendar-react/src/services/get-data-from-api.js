import { BASE_URL } from './constants';

export const getDataFromApi = async (url) => {
  const resultUrl = `${BASE_URL}${url}`;
  let data = null;
  const response = await fetch(resultUrl);
  if (response.ok) {
    data = await response.json();
  }
  
  return data;
}
