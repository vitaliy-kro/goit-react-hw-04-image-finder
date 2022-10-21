import { GalleryList, LoadMoreBtn } from './ImageGallery.styled';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';

export const ImageGallery = ({ images, loadMore }) => {
  return (
    <>
      <GalleryList>
        {images.map(e => (
          <GalleryItem
            key={e.id}
            webformatURL={e.webformatURL}
            tags={e.tags}
            largeImageURL={e.largeImageURL}
          ></GalleryItem>
        ))}
      </GalleryList>

      {images.length > 0 && (
        <LoadMoreBtn type="button" onClick={loadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
