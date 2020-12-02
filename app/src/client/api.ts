import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nix-backend.herokuapp.com/v1',
});
