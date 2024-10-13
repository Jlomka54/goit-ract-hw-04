import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ galleryPhotos }) => {
  return (
    <ul>
      {galleryPhotos.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard src={photo.urls.small} alt={photo.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
