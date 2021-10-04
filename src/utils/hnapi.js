import axios from 'axios';

export const searchHnApi = async (term) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`);
    return response.data;
}