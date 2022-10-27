import { useState, useEffect } from 'react';
import { Dna } from 'react-loader-spinner';
import { Searchbar } from './Searchbar';
import axios from 'axios';
import { ImageGallery } from './ImageGallery';

const API_KEY = '29676323-cbf3b0b0974f66dc50c141bea';
axios.defaults.baseURL = 'https://pixabay.com/api';
export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    const controller = new AbortController();

    const getItems = async (value, page = 1) => {
      try {
        if (page === 1) setIsLoading(true);

        const getItems = await axios.get(
          `/?key=${API_KEY}&image_type=photo&per_page=12&q=${value}&page=${page}&orientation=horizontal`,
          { signal: controller.signal }
        );
        page === 1
          ? setImages(getItems.data.hits)
          : setImages(prevImages => [...prevImages, ...getItems.data.hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getItems(search, page);

    return () => {
      controller.abort();
    };
  }, [page, search]);

  const handleSubmit = ({ search }) => {
    setSearch(search);
    setPage(1);
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      <Dna
        visible={isLoading}
        height="300"
        width="300"
        wrapperStyle={{
          display: 'block',
          margin: '0 auto',
        }}
      />
      {!isLoading && <ImageGallery images={images} loadMore={handleLoadMore} />}
    </>
  );
};
