export const validateEmail = (email: string) => {
  const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return format.test(String(email).toLowerCase())
}

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  // Định dạng số điện thoại phổ biến (ví dụ cho Việt Nam hoặc quốc tế)
  const phoneRegex = /^\+?\d{9,15}$/
  return phoneRegex.test(phoneNumber)
}
