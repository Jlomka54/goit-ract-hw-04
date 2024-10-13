import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const axiosSearchParams = {
  client_id: "aRXK_PxV_MgRCe9RpGRWZ1gQ4xBKxYm9fNztMatkJUA",
};

export const FetchPhoto = async (searchValue) => {
  const fetchValue = await axios.get("search/photos", {
    params: {
      query: searchValue,
      ...axiosSearchParams,
    },
  });
  return fetchValue;
};
