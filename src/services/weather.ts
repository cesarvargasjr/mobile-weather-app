import api from './api';

export const getWeather = async (city?: string) => {
  try {
    const { data } = await api.get(`/weather?city_name=${city}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};