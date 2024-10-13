export interface Product {
  id: number
  productName: string
  price: number
  quantity: number
}

export const products: Product[] = [
  {
    id: 1,
    productName: 'cam chua',
    price: 100,
    quantity: 10
  },
  {
    id: 2,
    productName: 'bưởi chục roi',
    price: 500,
    quantity: 5
  }
]
