import axios from 'axios';

export const api = axios.create({
  baseURL: `https://127.0.0.1:7089/api`,
});
