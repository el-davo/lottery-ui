import {environment} from '../../environments/environment';

const urlsEnv = {
  development: {
    apiUrl: 'http://localhost:3000/api'
  },
  production: {
    apiUrl: 'https://lottery-api.cfapps.io//api'
  }
};

export const urls = urlsEnv[environment.production ? 'production' : 'development'];
