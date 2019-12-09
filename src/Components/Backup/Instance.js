import axios from 'axios'

export const Instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {'Authorization': 'Bearer '+ localStorage.token}
  });