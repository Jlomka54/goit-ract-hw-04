import css from "./ImageModal.module.css";

const ImageModal = ({ photo, onClose }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        <img
          className={css.img}
          src={photo.urls.regular}
          alt={photo.alt_description}
        />
        <p>{photo.description || "No description available"}</p>{" "}
        <button className={css.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
