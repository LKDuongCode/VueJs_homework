import type { Product } from "@/interfaces/ProductType";
import { cartsInstance } from "@/utils/instances";

export const addToCart = async (product: Product) => {
  try {
    const res = await cartsInstance.post("/", product);
    return res.data;
  } catch (err) {
    alert(err);
  }
};
