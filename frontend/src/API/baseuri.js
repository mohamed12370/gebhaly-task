import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://gebhaly.onrender.com',

  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default baseUrl;
