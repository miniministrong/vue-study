<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
  import Count from "@/components/Count";
  import Person from "@/components/Person";
  export default {
    name:"App",
    components:{
      Count,Person
    },
  }
</script>

<style>
  .container,
  .foot{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>