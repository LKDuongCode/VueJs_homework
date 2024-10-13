export interface Profile {
  id: number
  name: string
  gender: 'Nam' | 'Nữ' | 'Khác'
  dob: string
  address: string
}

export const profile: Profile = {
  id: 1,
  name: 'Nguyễn Văn Nam',
  gender: 'Nam',
  dob: '20/03/2000',
  address: 'Hà Nội'
}
