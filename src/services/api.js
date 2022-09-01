import axios from 'axios';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io/';

export const addMaterial = async values => {
  const response = await axios.post('./materials', values);
  return response.data;
};
