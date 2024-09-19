<script setup>
const linkToBanner = 'https://learn.rikkeiacademy.com/learn/77'

// Hàm kiểm tra URL
const checkUrl = (url) => {
  try {
    const parsedUrl = new URL(url)
    if (!parsedUrl.protocol.startsWith('https')) {
      alert('URL không bắt đầu bằng https://')
      return false
    }

    // Kiểm tra xem URL có chứa một tên miền hợp lệ hay không
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!domainPattern.test(parsedUrl.hostname)) {
      alert('Tên miền không hợp lệ!')
      return false
    }
    return true
  } catch (error) {
    alert('Đường dẫn không hợp lệ!')
    return false
  }
}

// Xử lý sự kiện click vào liên kết
const handleClick = (event) => {
  if (!checkUrl(linkToBanner)) {
    event.preventDefault() // Ngăn chặn chuyển trang nếu URL không hợp lệ
  }
}
</script>

<template>
  <div>
    <!-- Kiểm tra khi người dùng nhấp vào liên kết -->
    <a :href="linkToBanner" @click="handleClick">to homework page</a>
  </div>
</template>

<style scoped></style>
