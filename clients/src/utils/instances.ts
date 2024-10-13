import axios from 'axios'

export const postsInstance = axios.create({
  baseURL: ' http://localhost:8000/posts',
  timeout: 1000,
  headers: {
    Authorization: 'Bearer token',
    'Content-Type': 'application/json',
  },
})
