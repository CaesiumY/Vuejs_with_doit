<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <ChartVue></ChartVue>
  </div>
</template>

<script>
import ChartVue from './Chart.vue';

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      ChartVue
    }
  }
</script>

<style scoped>

</style>