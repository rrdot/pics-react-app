import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID hsq1ReS2SHcr_mbh5_HEaJPaUD154U5m6WSNZBaVHic",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
