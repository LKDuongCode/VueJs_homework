<script setup lang="ts">
import { reactive, ref } from 'vue'

type User = {
  id: number
  fullname: string
  email: string
  password: string
  phone: string
}
const users = reactive<User[]>([
  {
    id: 1,
    fullname: 'le khanh duong',
    email: 'duong@gmail.com',
    password: '123',
    phone: '0987'
  }
])
const user = reactive<User>({
  id: 0,
  email: '',
  fullname: '',
  password: '',
  phone: ''
})
//validate
const validate = reactive({
  empty: false,
  existEmail: false,
  modalSuccess: false
})

// hàm kiểm tra email có tồn tại không
const checkExistEmail = (email: string, users: User[]) => {
  const result = users.find((user: User) => user.email === email)
  if (result) return true
  return false
}

//hàm set lại validate
const setAllToFalse = (validate: any) => {
  for (const key in validate) {
    validate[key] = false
  }
}

// focus : Tham chiếu đến ô input
const focusInput = ref<HTMLInputElement | null>(null)

//dăng kí
const handleRegister = () => {
  if (Object.values(user).some((value) => value === '')) {
    validate.empty = true
    return
  }

  if (checkExistEmail(user.email, users)) {
    validate.existEmail = true
    return
  }

  validate.modalSuccess = true

  // thêm vào mảng
  users.push({ ...user })

  //set lại input
  Object.assign(user, {
    id: Math.floor(Math.random() * 100),
    email: '',
    fullname: '',
    password: '',
    phone: ''
  })

  //focus vào fullname
  if (focusInput.value) {
    focusInput.value.focus()
  }
  // hiển thị thông báo
  setTimeout(() => {
    setAllToFalse(validate)
  }, 3000)
}
</script>

<template>
  <div class="form-add-product">
    <h3 style="color: aquamarine; text-align: center">Create a new account</h3>
    <hr />
    <div>
      <p>Fullname</p>
      <input
        type="text"
        v-model="user.fullname"
        @click="() => setAllToFalse(validate)"
        ref="focusInput"
      />
    </div>
    <div>
      <p>Email</p>
      <input type="text" v-model="user.email" @click="() => setAllToFalse(validate)" />
    </div>
    <div>
      <p>Password</p>
      <input type="text" v-model="user.password" @click="() => setAllToFalse(validate)" />
    </div>
    <div>
      <p>Phone</p>
      <input type="text" v-model="user.phone" @click="() => setAllToFalse(validate)" />
    </div>
    <p v-show="validate.empty" class="validate">Data fields cannot be left blank!</p>
    <p v-show="validate.existEmail" class="validate">This email already exist!</p>
    <p v-show="validate.modalSuccess" class="success">Creating account successfully!</p>

    <div style="display: flex; justify-content: center">
      <button class="addBtn" @click="handleRegister">Register</button>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; margin-top: 6px">
    <div
      style="border: solid; border-color: aliceblue; padding: 10px"
      v-for="(user, index) in users"
      :key="index"
    >
      <p>{{ user.id }}</p>
      <p>{{ user.fullname }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.password }}</p>
      <p>{{ user.phone }}</p>
    </div>
  </div>
</template>

<style scoped>
.form-add-product {
  min-width: 300px;
  border-width: 2px;
  border: solid;
  border-color: aquamarine;
  width: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
.addBtn {
  padding: 6px 20px;
  font-family: monospace;
  font-weight: 600;
  background-color: aquamarine;
  color: white;
}
input {
  width: 100%;
  outline: none;
  font-family: monospace;
}
.validate {
  background-color: rgba(255, 99, 71, 0.304);
  padding: 0 10px;
  font-size: small;
  color: tomato;
}

.success {
  background-color: rgba(128, 255, 0, 0.577);
  padding: 0 10px;
  font-size: small;
  color: chartreuse;
  text-align: center;
}
</style>
