export function getCurrentDateFormatted(): string {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0') // Tháng 0-11, cần +1 để thành 1-12
  const year = now.getFullYear()

  return `${day}/${month}/${year}`
}
