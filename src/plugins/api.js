import axios from 'axios';
export default () => {
    return axios.create({
        baseURL: 'https://deckofcardsapi.com/api/',
    });
};
