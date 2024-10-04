import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as any,
  }),
  actions: {
    setUser(user: any) {
      this.user = user
    },
    clearUser() {
      this.user = null
    },
  },
})