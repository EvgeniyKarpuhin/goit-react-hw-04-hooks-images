import axios from "axios";

const baseUrl = "https://pixabay.com/api/";
const apiKey = "23515098-6ca4d9d130a27025c1d21d34d";


export default async function useRequest(value, page) {

  const result = await axios
    .get(
      `${baseUrl}?q=${value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => {
      return ({ images: response.data.hits, loaded: true });
    })
  return result;
};
