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
    NavBar
  },
  head() {
    return {
      titleTemplate: '%s - Taskmanager with nuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Where you can find all the events taking place in your neighborhood'
        }
      ]
    }
  }
}
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
body {
  overflow-y: hidden;
  padding-right: 15px;
  background-color: rgba(28, 183, 255, 1);
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
</style>
