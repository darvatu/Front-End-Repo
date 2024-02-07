import axios from "axios";
const baseURL = axios.create({ baseURL: "https://daniel-app.onrender.com" });

export const getApiArticles = (url) => {
  return baseURL.get(url).then((response) => {
    return response.data;
  });
};

