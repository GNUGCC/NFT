import axios from 'axios';
const service = axios.create({
    baseURL: 'https://nft.tradcoins.net/api/'
});

service.interceptors.request.use(x => x);
service.interceptors.response.use(x => Promise.resolve(x.data));

export default service;