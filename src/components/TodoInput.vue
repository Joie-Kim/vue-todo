<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button v-on:click="addTodo">
      Add
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function() {
      // this는 해당 컴포넌트를 가리킴
      // console.log(this.newTodoItem);

      // 저장하는 로직
      localStorage.setItem(this.newTodoItem, this.newTodoItem);

      // 저장한 뒤에 빈 문자열로 초기화
      this.newTodoItem = "";
    },
  },
};
</script>

<style></style>
