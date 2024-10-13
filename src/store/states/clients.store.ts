export interface Client {
  id: number
  email: string
  pass: string
  status: boolean
}

export const clients: Client[] = [
  {
    id: 1,
    email: 'duong@gmail.com',
    pass: '123',
    status: false
  }
]
