import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://localhost:5000"
})

myAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    Promise.reject(error.message);
  }
);

myAxios.interceptors.response.use(res => res, async (err) => {
  const originalRequest = err.config;
  console.log('axios res')
  if (err.response?.status === 403 && !originalRequest._retry) {
     originalRequest._retry = true;
     const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) return Promise.reject(err);

      const { data } = await myAxios.post('/refresh-token', { refreshToken });

      // Store new tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // Retry original request with new access token
      originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
      return myAxios(originalRequest);
  }
  return Promise.reject(err);
})


export default myAxios;