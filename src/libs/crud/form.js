import _ from 'lodash'
export default {
  props: {
    formData: {},
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    formData: {
      immediate: true,
      handler: function (val, oval) {
        console.log(val)
        if (val) {
          this.form = {
            ...this.model,
            ..._.cloneDeep(val),
          }
          if (this.afterFormChanged) {
            this.afterFormChanged.call(this)
          }
          this.clearValidate()
        }
      },
    },
    dialogVisible(val) {
      if (!val) {
        this.cancel()
      }
    },
  },
  data() {
    return {
      formRef: 'form',
      form: null,
    }
  },
  methods: {
    clearValidate() {
      const {
        formRef
      } = this
      this.$nextTick(() => {
        this.$refs[formRef] && this.$refs[formRef].clearValidate()
      })
    },
    resetFields() {
      const {
        formRef
      } = this
      this.$nextTick(() => {
        this.$refs[formRef] && this.$refs[formRef].resetFields()
      })
    },
    cancel() {
      console.log('cancel')
      const {
        model,
        afterCancel
      } = this
      this.$emit('update:formData', null)
      this.$emit('update:dialogVisible', false)
      if (afterCancel) {
        afterCancel.call(this)
      }
      setTimeout(() => {
        this.form = _.cloneDeep(model || {})
        this.clearValidate()
      }, 300)
    },
    submit(args) {
      const {
        formRef,
        validateResolve,
        validateReject
      } = this
      
      this.$refs[formRef].validate(async valid => {
        if (valid) {
          validateResolve && validateResolve.call(this, args)
        } else {
          validateReject && validateReject.call(this, args)
        }
      })
    },
  },
}
