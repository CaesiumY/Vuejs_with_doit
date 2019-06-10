<template>
  <div>
    App 컴포넌트 <br>
    <input id="calendar">
  </div>
</template>

<script>
  export default {
    created() {
      console.log($.fn.jquery)
      console.log($.ui.version)
    },
    mounted() {
      $('#calendar').datepicker()
    },
  }
</script>

<style scoped>

</style>