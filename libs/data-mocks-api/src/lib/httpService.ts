import axios from 'axios';
const API_URL = process.env.NX_API_URL ?? '';

const getData = (endPoint: string) =>
  axios.get(`${API_URL}/${endPoint}`, {
    headers: {
      'X-RapidAPI-Key': process.env.NX_API_KEY ?? '',
    },
  });

export { getData };
