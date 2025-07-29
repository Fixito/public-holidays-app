import axios from 'axios';

import { API_CONFIG } from '../lib/constants';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
});

export default apiClient;
