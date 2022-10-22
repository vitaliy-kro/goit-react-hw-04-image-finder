import axios from 'axios';
const API_KEY = '29676323-cbf3b0b0974f66dc50c141bea';
axios.defaults.baseURL = 'https://pixabay.com/api';
// &page=1
export const getItems = async (value, page = 1) => {
  const getItems = await axios.get(
    `/?key=${API_KEY}&image_type=photo&per_page=12&q=${value}&page=${page}&orientation=horizontal`
  );

  return getItems.data.hits;
};
