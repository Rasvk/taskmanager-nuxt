<template>
  <div class="field">
    <label v-if="label"> {{ label }}</label>
    <input id="label" :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(task) {
      this.$emit('input', task.target.value)
    }
  }
}
</script>

<style scoped>
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  display: flex;
  width: 50%;
  margin: auto;
  justify-content: center;
}
</style>
