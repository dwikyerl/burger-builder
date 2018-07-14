import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-ed432.firebaseio.com/'
});

export default instance;