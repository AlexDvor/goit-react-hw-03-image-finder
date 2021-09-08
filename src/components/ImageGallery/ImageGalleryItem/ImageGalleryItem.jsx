function ImageGalleryItem({ webImage }) {
  return (
    <li className="ImageGalleryItem">
      <img src={webImage} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;
