export interface User {
  id: number
  userName: string
  gender: 'Nam' | 'Nữ' | 'Khác'
  dob: string
  address: string
}

export const users: User[] = [
  {
    id: 1,
    userName: 'Nguyen Van A',
    gender: 'Nam',
    dob: '1990-01-01',
    address: 'Ha Noi'
  },
  {
    id: 2,
    userName: 'Tran Thi B',
    gender: 'Nữ',
    dob: '1992-05-15',
    address: 'Ho Chi Minh'
  },
  {
    id: 3,
    userName: 'Le Van C',
    gender: 'Nam',
    dob: '1988-09-25',
    address: 'Da Nang'
  },
  {
    id: 4,
    userName: 'Pham Thi D',
    gender: 'Nữ',
    dob: '1995-12-30',
    address: 'Hai Phong'
  }
]
