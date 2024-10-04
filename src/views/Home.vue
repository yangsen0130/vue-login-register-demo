<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome to the Home Page</h1>
      <p v-if="user">Hello, {{ user.username }}!</p>
      <p v-else>Please log in to see your personal greeting.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useUserStore } from '@/store/user'
  
  export default defineComponent({
    name: 'Home',
    setup() {
      const userStore = useUserStore()
      const user = computed(() => userStore.user)
  
      return { user }
    }
  })
  </script>