import axios from 'axios';
const baseURL = axios.create({ baseURL: 'https://daniel-app.onrender.com' });

export const getApiArticles = () => {
    return baseURL.get('/api/articles').then((response) => {
        return response.data;
    })
}