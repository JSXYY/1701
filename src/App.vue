<template>
  <div id="app">
   <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
a{
    color: #000;
    text-decoration: none;
}
em, address {
    font-style: normal;
}

</style>
