<template>
  <div @click="setClickedTask">
    <h4 class="title">{{ task.title }}</h4>
    <h5 class="shade">deadline: {{ task.deadlineDate }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    task: Object
  },
  computed: {
    /* parsedDate() {
      const taskDate = new Date(this.task.date)
      return taskDate.toDateString()
    } */
  },
  methods: {
    setClickedTask() {
      this.$store.dispatch('task/setTask', this.task.id)
    }
  }
}
</script>

<style scoped>
div {
  padding: 20px;
  transition: all 0.3s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0 auto;
  color: black;
}

.shade {
  margin: 0 auto;
  color: rgb(0, 0, 0, 0.5);
}
</style>
