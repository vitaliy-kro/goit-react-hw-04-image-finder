import { Component } from 'react';
import { Item, Image } from './GalleryItem.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  componentWillUnmount() {
    if (!this.state.isModalOpen) {
      window.removeEventListener('keyup', this.handleEscClose);
    }
  }
  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener('keyup', this.handleEscClose);
  };
  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };
  handleBackdropClick = e => {
    console.log(e);
    if (e.target === e.currentTarget) {
      console.log('Click backdrop!');
      this.setState({ isModalOpen: false });
      console.log('After setState Click backdrop!');
    }
  };
  render() {
    const { handleModalOpen, handleBackdropClick } = this;
    const { isModalOpen } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <Item onClick={handleModalOpen}>
        <Image src={webformatURL} alt={tags} />
        {isModalOpen && (
          <ModalWindow
            imageSrc={largeImageURL}
            ImageAlt={tags}
            onBackdropClick={handleBackdropClick}
          ></ModalWindow>
        )}
      </Item>
    );
  }
}
