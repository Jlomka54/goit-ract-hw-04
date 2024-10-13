import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

import { FetchPhoto } from "./api.js";
import { useEffect, useState } from "react";
const App = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const searchPhotoForGallery = async () => {
      if (!searchValue) return;
      try {
        const { data } = await FetchPhoto(searchValue);
        setPhotos(data.results);
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
      }
    };

    searchPhotoForGallery();
  }, [searchValue]);

  const onSubmit = (eve) => {
    eve.preventDefault();
    const form = eve.target.elements;
    const userValue = form.searchValue.value.trim();
    setSearchValue(userValue);
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery galleryPhotos={photos} />
    </div>
  );
};

export default App;
