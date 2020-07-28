import api from './api';

class API {
    static getImages = async (body) => api.get('images');
}

export default API;