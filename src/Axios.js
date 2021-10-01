import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/api/admin/login/"//"http://127.0.0.1:8000/api/login";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('jwt')
        ? 'JWT' + localStorage.getItem('jwt')
        : null,
        'Content-Type' : 'application/json',
        accept : 'application/json',
    },
});

export default axiosInstance;