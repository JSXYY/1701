<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios"

import router from "./router"

export default {

  data () {
    return {
				
    }
  },
  	mounted(){
  		axios.post("/api/session").then(res=>{
  			if(res.data == "yes"){
  					
  					router.push("/other/shopcar")	
  			}else{
  					router.push("/other/login")
  			}
  		})
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
