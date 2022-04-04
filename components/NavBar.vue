<template>
  <div class="navigation">
    <nav>
      <nuxt-link :to="{ name: 'index' }">HOME</nuxt-link>
      <nuxt-link :to="{ name: 'TaskManager' }">Task Manager</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navigation {
  position: absolute;
  background-color: red;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  height: 4%;
}
</style>
