<template>
  <div class="app-form">
    <login-form v-bind:form-data="ruleForm" @update:formData="update"></login-form>
  </div>
</template>

<script>
import loginForm from './login/index.vue'
export default {
  name: 'appForm',
  components: {
    loginForm
  },
  data() {
    return {
      ruleForm: {
        name: 'hello',
        email: 'abc@11.co'
      },
    }
  },
  methods: {
    update(e) {
      console.log('cancel', e)
      this.ruleForm = {...e}
    }
  },
}
</script>

<style lang="scss" scoped>
.app-form {
  height: 100%;
}
</style>

