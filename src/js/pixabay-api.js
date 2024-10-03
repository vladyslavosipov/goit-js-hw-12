import axios from "axios";

export const fetchImages = async (text, currentPage) => {
    const searchImages = new URLSearchParams({
        key: "45941098-20d6b06978404a6b7356e16b7",
        q: text,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 15,
        page: currentPage,
    });

    const response = await
        axios.get(`https://pixabay.com/api/?${searchImages}`)
      return response.data
};