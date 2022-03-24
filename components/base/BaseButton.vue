<template>
  <div>
    <button
      class="button"
      :class="buttonClass"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    buttonClass: {
      type: String
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0px 40px;
  background: transparent;
  border: none;
  border-radius: 15px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
  margin-top: 10px;
  margin-bottom: 10px;
}
.button.fillGradient {
  background: linear-gradient(to right, deepskyblue, dodgerblue);
  color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 2px rgb(0, 0, 0, 0.3);
}

.button.fillGradient:active {
  background: plum;
}

.button:active {
  background: darkgrey;
}
.button:hover {
  background: darkgrey;
  box-shadow: 6px 6px rgb(0, 0, 0, 0.6);
}
</style>
