import axios from "axios";
const baseURL = axios.create({ baseURL: "https://daniel-app.onrender.com" });

export const getApi = (url) => {
  return baseURL.get(url).then((response) => {
    return response.data;
  });
};

export const postApi = (url, data) => {
  return baseURL.post(url, data).then((response) => {
    return response.data;
  });
};

export const patchApi = (url, data) => {
  return baseURL.patch(url, data).then((response) => {
    return response.data;
  });
};
