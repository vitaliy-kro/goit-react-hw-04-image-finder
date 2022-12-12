export interface IListProps {
  images: {
    id: number;
    webformatURL: string;
    tags: string;
    largeImageURL: string;
  }[];
  loadMore: () => void;
}

export interface IImageProps {
  id: number;
  webformatURL: string;
  tags: string;
  largeImageURL: string;
}
