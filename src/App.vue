<template>
  <div id="app">

   <keep-alive>
    <router-view></router-view>
  </keep-alive>
      <ul class="tablist">
        <router-link  to="/home" class="logo"></router-link>
        <router-link  to="/my" class="my"></router-link>
        <router-link  to="/shopcar" class="shopcar"></router-link>
      </ul>
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
    margin:0px;
    padding:0px;
  }

  html,body{
    width: 100%;
    height: 100%;
  }

  .tablist {
    display: flex;
    position:fixed;
    width: 100%;
    top:0px;
  }
  .tablist a{
    height: 50px;
    flex:1;
    display: block;
  }
  .tablist .logo{
    background: url(./assets/d1_logo.png) no-repeat;
  }
  .tablist .my{
    background: url(./assets/my.png) no-repeat;
  }
  .tablist .shopcar{
    background: url(./assets/cart.png) no-repeat;
  }
  .tablist button{

  }
  .active{
    background: #14c145;
  }
</style>
