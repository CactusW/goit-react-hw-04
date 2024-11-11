import axios from 'axios';

export const fetchArticles = async (query, page = 1) => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos/`, {
      params: {
        client_id: '-_S48f3lnop3CL5HuRCnqVRdn5Ygiefpa0BWdyrHCRg',
        query: query,
        page: page,
        per_page: 12, 
      },
    });
    return data;
}