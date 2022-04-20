<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select :id="label" :value="value" v-bind="$attrs" @input="updateValue">
      <option value="" disabled selected hidden>Please Choose...</option>
      <option
        v-for="option in options"
        :key="option"
        :selected="option === value"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
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
