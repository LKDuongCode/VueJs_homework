import { type StateType } from './index'
import type { Client } from './states/clients.store'

///tăng giảm count
export const increment = (state: StateType) => (state.count = state.count + 1)

export const decrement = (state: StateType) => (state.count -= 1)

///hw5 hàm tạo số ngẫu nhiên và push vào mảng
export const generateRandomNumber = (state: StateType) => {
  let randomNumber: number
  // Vòng lặp để tìm số ngẫu nhiên chưa có trong mảng
  do {
    randomNumber = Math.floor(Math.random() * 100) + 1
  } while (state.nums.includes(randomNumber))

  state.nums.push(randomNumber)
}

/// hw6
export const changeState = (state: StateType) => (state.company = 'RikkeiSoft')

///hw7
export const changeMode = (state: StateType, payload: 'light' | 'dark') => (state.mode = payload)

///hw8
export const changeLanguages = (state: StateType, payload: 'Vietnamese' | 'English') =>
  (state.languages = payload)

//hw9
export const addAclient = (state: StateType, payload: Client) => state.clients.push(payload)
