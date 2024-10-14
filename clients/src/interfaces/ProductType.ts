import type { ApiError } from "./errorAPI";

export interface Product {
  id: number;
  p_name: string;
  p_description: string;
  p_quantity: number;
  p_img: string;
  p_price: number;
  p_status: boolean;
}

export interface ProductState {
  data: Product[];
  loading: boolean;
  err: ApiError | null;
}
