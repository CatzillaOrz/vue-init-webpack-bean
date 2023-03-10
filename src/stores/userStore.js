import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ user: null }),
  getters: {
  },
  actions: {
    setUser(user) {
      this.user = user; 
      //localStorage
    },
    logoutUser(){
      this.$reset()
    }
  },
})

