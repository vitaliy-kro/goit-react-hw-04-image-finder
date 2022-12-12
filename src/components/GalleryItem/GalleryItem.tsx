import { useState, useEffect } from 'react';
import { Item, Image } from './GalleryItem.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { IProp } from './GalleryItem.interface';

export const GalleryItem: React.FC<IProp> = ({
  webformatURL,
  tags,
  largeImageURL,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleEscClose);
    return () => {
      window.removeEventListener('keyup', handleEscClose);
    };
  }, [isModalOpen]);

  const handleEscClose = (e: KeyboardEvent) => {
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
          imageAlt={tags}
          onBackdropClick={() => setIsModalOpen(false)}
        ></ModalWindow>
      )}
    </Item>
  );
};
