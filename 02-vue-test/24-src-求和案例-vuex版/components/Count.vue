<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <select v-model.number="selectedNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="odd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Count",
    data(){
      return{
        // 用户选择的数字
        selectedNum:1
      }
    },
    methods: {
      increment(){
        this.$store.commit('ADD', this.selectedNum);
      },
      decrement(){
        this.$store.commit('SUB', this.selectedNum);
      },
      odd(){
        this.$store.dispatch('odd', this.selectedNum);
      },
      incrementWait(){
        this.$store.dispatch('wait', this.selectedNum);
      },
    }
  }
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>