// apiClient.js
const apiClient = axios.create({
    baseURL: 'https://api.example.com',
  });
  
  apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  