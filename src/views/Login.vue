<template>
    <div class="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Login</h2>
      <el-form @submit.prevent="handleSubmit">
        <el-form-item label="Username" required>
          <el-input v-model="username" placeholder="Enter your username"></el-input>
        </el-form-item>
        <el-form-item label="Password" required>
          <el-input v-model="password" type="password" placeholder="Enter your password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" :loading="loading">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { login } from '@/services/api'
  import { useUserStore } from '@/store/user'
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const router = useRouter()
      const userStore = useUserStore()
  
      const username = ref('')
      const password = ref('')
      const loading = ref(false)
  
      const handleSubmit = async () => {
        loading.value = true
        try {
          const response = await login(username.value, password.value)
          userStore.setUser(response.data)
          ElMessage.success('Login successful')
          router.push('/')
        } catch (error) {
          ElMessage.error('Login failed. Please check your credentials.')
        } finally {
          loading.value = false
        }
      }
  
      return { username, password, loading, handleSubmit }
    }
  })
  </script>