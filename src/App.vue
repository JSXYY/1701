<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from "axios"
//import { MessageBox } from 'mint-ui';
import router from "./router"
import api from "./api";
export default {

  data () {
    return {
				
    }
  },
  	mounted(){
  		axios.post(api.interface+"/api/session").then(res=>{
  			if(res.data == "yes"){
  					router.push("/my")	
  			}else{
  					router.push("/other/login")
  			}
  		})
  		
//		plus.key.addEventListener("backbutton",function(){
//				MessageBox({
//				  title: '提示',
//				  message: '确定退出吗?',
//				  showCancelButton: true
//				});
//			});
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
