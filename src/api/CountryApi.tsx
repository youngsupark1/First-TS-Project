import axios from 'axios';
import { Country } from '../types/country';

const API_URL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('국가 데이터를 가져오는 중 오류 발생 :', error);
    throw error;
  }
};
