// 求和功能相关的配置
export default {
  namespaced: true,
  actions: {
    odd(context, value){
      if (context.state.sum % 2) {
        context.commit("ADD", value);
      }
    },
    wait(context, value){
      setTimeout(() => context.commit("ADD", value), 500);
    }
  },
  mutations: {
    ADD(state, value){
      console.log("mutations中的ADD被调用了")
      state.sum += value
    },
    SUB(state, value) {
      console.log("mutations中的SUB被调用了")
      state.sum -= value;
    },
  },
  state: {
    sum:0,
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state){
      return state.sum * 10
    }
  }
}