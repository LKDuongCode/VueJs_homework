import axios from 'axios'

export const studentsInstance = axios.create({
  baseURL: ' http://localhost:8000/students',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer token',
    'Content-Type': 'application/json'
  }
})
