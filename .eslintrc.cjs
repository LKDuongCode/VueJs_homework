/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true // Thêm môi trường Node.js
  },
  overrides: [
    {
      files: ['tailwind.config.js'], // Cấu hình riêng cho các tệp cấu hình
      rules: {
        'no-undef': 'off' // Tắt quy tắc no-undef cho các tệp cấu hình
      }
    }
  ]
}
