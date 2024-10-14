import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

import { FetchPhoto } from "./api.js";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader.jsx";
import LoadMoreBT from "./components/LoadMoreBT/LoadMoreBT.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

const App = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoader] = useState(false);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const searchPhotoForGallery = async () => {
      if (!searchValue) return;
      try {
        setIsLoader(true);
        const { data } = await FetchPhoto(searchValue, page);
        console.log(data);

        if (data.results.length === 0) {
          toast.error(`No information found matching your request`);
          setPhotos([]);
          return;
        }
        setPhotos((prevPhoto) =>
          page === 1 ? data.results : [...prevPhoto, ...data.results]
        );
        setTotalPages(data.total_pages);

        console.log(data);
      } catch (error) {
        toast.error(`Try again. ${error}`);
      } finally {
        setIsLoader(false);
      }
    };

    searchPhotoForGallery();
  }, [searchValue, page]);

  const loadMorePhoto = () => {
    setPages(page + 1);
  };

  const onSubmit = (eve) => {
    eve.preventDefault();
    const form = eve.target.elements;
    const userValue = form.searchValue.value.trim();
    setSearchValue(userValue);
    setPages(1);
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />

      <ImageGallery galleryPhotos={photos} onPhotoClick={openModal} />

      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {photos.length > 0 && page < totalPages && (
        <LoadMoreBT loadMorePhoto={loadMorePhoto} />
      )}

      {isModalOpen && selectedPhoto && (
        <ImageModal photo={selectedPhoto} onClose={closeModal} />
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
