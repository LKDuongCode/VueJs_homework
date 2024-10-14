import { cartsInstance } from "@/utils/instances";

export const getAllCart = async () => {
  try {
    const res = await cartsInstance.get(`/`);
    return res.data;
  } catch (err) {
    alert(err);
  }
};
