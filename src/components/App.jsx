import { Component } from 'react';
import { Dna } from 'react-loader-spinner';
import { Searchbar } from './Searchbar';
import * as API from './API/API';
import { ImageGallery } from './ImageGallery';
export class App extends Component {
  state = {
    images: [],
    search: null,
    page: 1,
    isLoading: false,
  };
  async componentDidUpdate(_, prevState) {
    const { page, search } = this.state;
    try {
      if (prevState.page !== page && prevState.search === search) {
        this.setState({ isLoading: true });
        const getImages = await API.getItems(search, page);
        this.setState(prev => {
          return { images: [...prev.images, ...getImages] };
        });
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log('Whoops,something go wrong ;( Reload the page and try again');
      this.setState({ isLoading: false });
    }
  }
  handleSubmit = async ({ search }) => {
    try {
      this.setState({
        isLoading: true,
        search,
      });

      const getImages = await API.getItems(search);

      this.setState({
        images: getImages,
        isLoading: false,
      });
    } catch (error) {
      console.log('Whoops,something go wrong,try again');
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };
  render() {
    const { images, isLoading } = this.state;
    const { handleSubmit, handleLoadMore } = this;
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
        <ImageGallery images={images} loadMore={handleLoadMore} />
      </>
    );
  }
}
