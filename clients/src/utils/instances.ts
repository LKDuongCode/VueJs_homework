import { baseURL } from "@/API/baseURL";
import axios from "axios";

export const productsInstance = axios.create({
  baseURL: `${baseURL}/products`,
  timeout: 1000,
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});
export const cartsInstance = axios.create({
  baseURL: `${baseURL}/carts`,
  timeout: 1000,
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
});
