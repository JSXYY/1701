<template>
  <div id="app">
    <router-view></router-view>
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
	#app{
		height: 100%;
	}
  .mint-indicator{
    font-size: 15px
  }
</style>
