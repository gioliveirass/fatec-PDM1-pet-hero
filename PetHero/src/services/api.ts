import axios from 'axios';

export const api = axios.create({
  baseURL: `https://localhost:44306/api`,
});
