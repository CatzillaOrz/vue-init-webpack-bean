import { mapStores } from 'pinia'
import { useUserStore } from '@/stores/userStore'
export default {
  computed: {
    ...mapStores(useUserStore)
  },
  methods: {
    login(user) {
      this.userStore.setUser(user)
    },
    logout() {
      this.userStore.logoutUser();
    }
  }
}
