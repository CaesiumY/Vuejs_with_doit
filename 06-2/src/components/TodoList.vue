<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{todoItem}}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props:['propsdata'], 
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index)
    }
  },
};
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.6rem 0.6rem;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 50px;
        color: #62acde;
        margin-right: 15px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
</style>