import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ galleryPhotos, onPhotoClick }) => {
  return (
    <ul className={css.imageGallery}>
      {galleryPhotos.map((photo) => {
        return (
          <li
            className={css.imageGalleryItem}
            onClick={() => onPhotoClick(photo)}
            key={photo.id}
          >
            <ImageCard
              className={css.img}
              src={photo.urls.small}
              alt={photo.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
