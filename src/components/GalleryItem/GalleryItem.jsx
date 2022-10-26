import { useState, useEffect } from 'react';
import { Item, Image } from './GalleryItem.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const GalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleEscClose);
    return () => {
      window.removeEventListener('keyup', handleEscClose);
    };
  }, [isModalOpen]);

  const handleEscClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };
  return (
    <Item>
      <Image
        onClick={() => setIsModalOpen(true)}
        src={webformatURL}
        alt={tags}
      />
      {isModalOpen && (
        <ModalWindow
          imageSrc={largeImageURL}
          ImageAlt={tags}
          onBackdropClick={() => setIsModalOpen(false)}
        ></ModalWindow>
      )}
    </Item>
  );
};
