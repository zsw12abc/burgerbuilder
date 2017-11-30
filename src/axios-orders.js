import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c5dd4.firebaseio.com/'
});

export default instance;