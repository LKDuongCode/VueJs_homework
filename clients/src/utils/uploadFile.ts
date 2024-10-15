import { storage } from '@/firebase/config'
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage'

// Hàm xử lý việc upload file và trả về URL sau khi upload
export const uploadFile = async (
  file: File,
  folderPath: string,
): Promise<string | null> => {
  if (!file) return null

  try {
    // Gọi uploadToStorage để upload file và nhận đường dẫn
    const filePath = await uploadToStorage(file, folderPath) // Truyền folderPath vào đây

    // Sau khi upload, lấy URL của file
    const downloadURL = await getFileURL(filePath)

    // Trả về URL của file sau khi upload thành công
    return downloadURL
  } catch (error) {
    console.error(error)
    throw new Error('Đã xảy ra lỗi khi upload file.')
  }
}

// Hàm upload file lên Firebase Storage và trả về đường dẫn của file trong storage
export const uploadToStorage = async (
  file: File,
  folderPath: string,
): Promise<string> => {
  if (!file) throw new Error('Không có file để upload.')

  // Sử dụng folderPath do người dùng truyền vào thay vì hardcode
  const storageReference = storageRef(storage, `${folderPath}/${file.name}`)
  await uploadBytes(storageReference, file)

  return storageReference.fullPath // Trả về đường dẫn của file trong storage
}

// Hàm lấy URL của file từ Firebase Storage dựa trên đường dẫn
export const getFileURL = async (filePath: string): Promise<string> => {
  const storageReference = storageRef(storage, filePath)
  const downloadURL = await getDownloadURL(storageReference)

  return downloadURL // Trả về URL của file
}
