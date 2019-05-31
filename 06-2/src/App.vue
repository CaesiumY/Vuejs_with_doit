<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeaderVue from "./components/TodoHeader.vue";
import TodoInputVue from "./components/TodoInput.vue";
import TodoListVue from "./components/TodoList.vue";
import TodoFooterVue from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader: TodoHeaderVue,
    TodoInput: TodoInputVue,
    TodoList: TodoListVue,
    TodoFooter: TodoFooterVue
  }
};
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }

</style>