<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
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
        selectedNum:1,
        sum:0
      }
    },
    methods: {
      increment(){
        this.sum += this.selectedNum;
      },
      decrement(){
        this.sum -= this.selectedNum;
      },
      odd(){
        if (this.sum % 2) {
          this.sum += this.selectedNum;
        }
      },
      incrementWait(){
        setTimeout(()=>{
          this.sum += this.selectedNum;
        },500);
      },
    }
  }
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>