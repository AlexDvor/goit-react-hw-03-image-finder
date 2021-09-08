import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map(item => (
        <ImageGalleryItem key={item.id} webImage={item.webformatURL} />
      ))}
    </ul>
  );
}

export default ImageGallery;
