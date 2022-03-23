<template>
  <div id="app">
    <nav-bar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
  head() {
    return {
      titleTemplate: '%s - Taskmanager with nuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Where you can find all the events taking place in your neighborhood',
        },
      ],
    }
  },
}
</script>
<style>
#id {
  width: 100%;
  height: 100%;
}
</style>
