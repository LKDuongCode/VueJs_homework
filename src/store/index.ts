import { createStore } from 'vuex'
import { profile, type Profile } from './states/profile.store'
import { users, type User } from './states/users.store'
import { products, type Product } from './states/products.store'
import {
  addAclient,
  changeLanguages,
  changeMode,
  changeState,
  decrement,
  generateRandomNumber,
  increment
} from './mutations'
import { clients, type Client } from './states/clients.store'
export interface StateType {
  profile: Profile
  users: User[]
  products: Product[]
  count: number
  nums: number[]
  company: string
  mode: 'light' | 'dark'
  languages: 'Vietnamese' | 'English'
  clients: Client[]
}
// Định nghĩa kiểu cho mutations----------------------------------------
export interface MutationsType {
  increment: (state: StateType) => void
  decrement: (state: StateType) => void
  generateRandomNumber: (state: StateType) => void
  changeState: (state: StateType) => void
  changeMode: (state: StateType, payload: 'light' | 'dark') => void
  changeLanguages: (state: StateType, payload: 'Vietnamese' | 'English') => void
  addAclient: (state: StateType, payload: Client) => void
}

// Hàm commit với kiểu hóa cho mutations
export function commit<K extends keyof MutationsType>(
  key: K,
  payload?: Parameters<MutationsType[K]>[1]
) {
  store.commit(key, payload)
}
// Định nghĩa kiểu cho mutations----------------------------------------

//store
export const store = createStore<StateType>({
  state: {
    products: products,
    profile: profile,
    users: users,
    count: 0,
    nums: [],
    company: 'Rikkei Academy',
    mode: 'light',
    languages: 'Vietnamese',
    clients: clients
  },
  mutations: {
    increment,
    decrement,
    generateRandomNumber,
    changeState,
    changeMode,
    changeLanguages,
    addAclient
  },
  actions: {},
  getters: {}
})
