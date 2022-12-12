import { GalleryList, LoadMoreBtn } from './ImageGallery.styled';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { IListProps, IImageProps } from './ImageGallery.interface';
export const ImageGallery: React.FC<IListProps> = ({ images, loadMore }) => {
  return (
    <>
      <GalleryList>
        {images.map(
          ({ id, webformatURL, tags, largeImageURL }: IImageProps) => (
            <GalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          )
        )}
      </GalleryList>

      {images.length > 0 && (
        <LoadMoreBtn type="button" onClick={loadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};
