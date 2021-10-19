<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}学习{{subject}}</h3>
    <select v-model.number="selectedNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(selectedNum)">+</button>
    <button @click="decrement(selectedNum)">-</button>
    <button @click="incrementOdd(selectedNum)">当前求和为奇数再加</button>
    <button @click="incrementWait(selectedNum)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name: "Count",
    data(){
      return{
        // 用户选择的数字
        selectedNum:1
      }
    },
    computed: {
      // 借助mapState生成计算属性，从state中读取数据。（对象写法）
      // ...mapState({he:'sum', xuexiao: 'school', xueke: 'subject'}),

      // 借助mapState生成计算属性，从state中读取数据。（数组写法）
      ...mapState(['sum','school','subject']),
      /* ************************************************ */

      // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
      // ...mapGetters({bigSum: 'bigSum'}),

      // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
      ...mapGetters(['bigSum']),
    },
    methods: {
      // 程序员亲自写方法
      /*increment(){
        this.$store.commit('ADD', this.selectedNum);
      },
      decrement(){
        this.$store.commit('SUB', this.selectedNum);
      },*/

      // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations（对象写法）
      ...mapMutations({increment: 'ADD', decrement: 'SUB'}),
      // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations（数组写法）
      // ...mapMutations(['ADD', 'SUB']),
      /* ************************************************* */
      // 程序员亲自写方法
      /*incrementOdd(){
        this.$store.dispatch('odd', this.selectedNum);
      },
      incrementWait(){
        this.$store.dispatch('wait', this.selectedNum);
      },*/
      // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions（对象写法）
      ...mapActions({incrementOdd: 'odd', incrementWait : 'wait'}),
      // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions（数组写法）
      // ...mapActions(['odd', 'wait']),
    },
    mounted(){
      const x = mapState({
        he:'sum',
        xuexiao: 'school',
        xueke: 'subject'
      })
      console.log(x)
    },
  }
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>