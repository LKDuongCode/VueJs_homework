import type { Product } from '@/interfaces/ProductType'

// Hàm validate kiểm tra xem name đã tồn tại trong mảng product hay chưa
export const validateProductName = (
  products: Product[],
  name: string,
  command: 'add' | 'edit',
  oldName?: string
): boolean => {
  if (command === 'add') return products.some((product) => product.p_name === name)
  if (command === 'edit') {
    const filteredProducts = products.filter((product) => product.p_name !== oldName)
    return filteredProducts.some((product) => product.p_name === name)
  }

  return false
}
