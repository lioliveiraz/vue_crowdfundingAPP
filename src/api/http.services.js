import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";
axios.interceptors.response.use(null, error => {
    const clientErr = error.response && error.status >= 400 && error.status <= 500;

    if (!clientErr) {
        console.log(error);
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    put: axios.put
};