import axiosInstance from "../api/axiosInstance";
import { endpoints } from "../api/endpoints";

export const fetchAllProducts = () =>
  axiosInstance
    .get()
    .then((res) => res.data.products)
    .catch((err) => console.log(err));

export const fetchCatList = () =>
  axiosInstance
    .get(endpoints.categoryList)
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const fetchCatProducts = (cat) =>
  axiosInstance
    .get(`/category/${cat}`)
    .then((res) => res.data.products)
    .catch((err) => console.log(err));

export const fetchSearchProducts = (keyword) =>
  axiosInstance
    .get(`/search?q=${keyword}`)
    .then((res) => res.data.products)
    .catch((err) => console.log(err));

export const fetchProductDetails = (id) =>
  axiosInstance
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
