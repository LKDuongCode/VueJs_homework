export interface EditStudent {
  s_name: string
  s_email: string
  s_address: string
  s_phone: string
  s_status: boolean
  s_created_at: string
}

// Kế thừa từ EditStudent và thêm id
export interface Student extends EditStudent {
  id: number
}
