<template>
  <div class="app-login">
    <div class="login-layout">
      <login-form v-bind:form-data="userForm" @login="loginAction"></login-form>
    </div>

  </div>
</template>
<script>
import { UserMixin } from '@lib'
import loginForm from '@/views/form/login/index.vue'
export default {
  name: 'login',
  mixins: [UserMixin],
  components: {
    loginForm
  },
  data() {
    return {
      userForm: { name: '', email: '' }
    }
  },
  methods: {
    loginAction(user) {
      if (!user) this.logout()
      this.login(user)
      this.$router.push({ path: '/map' })
    }
  },
}
</script>

<style>
.app-login {
  height: 100%;
}
</style>
