import axios from 'axios';
import { toast } from 'react-toastify';
import Raven from 'raven-js';

axios.interceptors.response.use(null, error => {
    const expextedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expextedError) {
        // console.log('logging the error', error);
        Raven.captureException(error);
        toast.error('An unexpected error occured');
    }
    return Promise.reject(error)
});
const http = {
    get: axios.get,
    post: axios.post,
    deletePost: axios.delete,
    put: axios.put
};
export default http;