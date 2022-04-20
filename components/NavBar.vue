<template>
  <div class="navigation">
    <div class="logo">TaskMngr</div>
    <nav class="links">
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
  background: linear-gradient(to right, rgb(41, 106, 247), dodgerblue);
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  height: 4%;
}

.links {
  float: right;
  margin-right: 10px;
  justify-content: center;
  padding: 10px;
}

.nuxt-link-active {
  color: aliceblue;
  text-decoration: none;
  text-align: center;
  margin-left: 20px;
}

.nuxt-link-active:hover {
  background: rgb(87, 72, 252);
  padding: 5px;
  border-radius: 5px;
}

a {
  color: aliceblue;
  text-decoration: none;
  text-align: center;
  margin-left: 20px;
}

.logo {
  display: table;
  height: 100%;
  float: left;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 25px;
  margin-left: 10px;
}

.logo div {
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}
</style>
