import { productsInstance } from "@/utils/instances";

export const getAllProduct = async () => {
  try {
    const res = await productsInstance.get(`/`);
    return res.data;
  } catch (err) {
    alert(err);
  }
};
