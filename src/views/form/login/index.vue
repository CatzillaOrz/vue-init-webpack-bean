<template>
  <div class="app-form">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row type="flex" justify="center" v-bind:gutter="20">
        <el-col :span="12">
          <el-form-item label="Nick Name:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center"><el-col :span="12">
          <el-form-item label="Email:" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row type="flex" justify="center" v-bind:gutter="20">
      <el-col :span="12">
        <el-button type="primary" @click="onSubmit">登陆</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Form } from '@lib';
export default {
  name: 'loginForm',
  mixins: [Form],
  data() {
    return {
      formRef: 'ruleForm',
      ruleForm: null,
      model: {
        name: '',
        email: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入email', trigger: 'change' },
          { type: 'email', message: '请检查email', trigger: 'change' }
        ],
      }

    }
  },
  methods: {
    afterFormChanged() {
      this.ruleForm = {
        ...this.form
      }
//      this.$emit('update:formData', this.ruleForm);
    },
    onSubmit() {
      console.log('beforeSubmit')
      console.log(this.ruleForm);
      const { submit } = this;
      submit()
    }
  },
}
</script>

<style lang="scss" scoped>
.app-form {
  height: 100%;
}
</style>

