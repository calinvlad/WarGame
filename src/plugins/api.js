import axios from 'axios';
import conf from './conf'
export default () => {
    return axios.create({
        baseURL: conf.baseUrl,
    });
};

