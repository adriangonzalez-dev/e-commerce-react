import axios from 'axios';

export const axiosProducts = axios.create({
    baseURL: 'https://fakestoreapi.com'
})