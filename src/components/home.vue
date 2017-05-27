	<template>
		<div id="home">
			<div class="header">
				<!-- <div class="logo">
					<img src="../assets/d1_logo.png" height="100%" width="100%">
				</div> -->
				<router-link to="/home" tag="div" class="logo">
					<img src="../assets/d1_logo.png" height="100%" width="100%">
				</router-link>
				<div class="search">
					<input class="inp_sear" type="text"/>
					<input type="button" value="搜索"  class="inp_btn" />
				</div>
				<div class="my">
					<a href="#my" title="">
					<img src="../assets/my.png"height="100%" width="100%">
					</a>
				</div>
				<div class="car">
					<a href="#other/shopcar" title="">
					<img src="../assets/cart.png" height="100%" width="100%">
					</a>
				</div>
			</div>
			<div class="nav" id="nav">
				<ul>
					<router-link to="/home/index" tag="li" active-class="active"><a>首页</a></router-link>
					<router-link to="/home/result/012" tag="li" active-class="active"><a>家居</a></router-link>
					<router-link to="/home/result/081" tag="li" active-class="active"><a>数码</a></router-link>
					<router-link to="/home/result/019" tag="li" active-class="active"><a>酷装备</a></router-link>
					<router-link to="/home/result/014001" tag="li" active-class="active"><a>美妆</a></router-link>
					<router-link to="/home/result/3934" tag="li" active-class="active"><a>秒杀</a></router-link>
				</ul>
			</div>
    		<router-view></router-view>
			<div class="footer">
				<div class="user">
					<a href="#other/login">请登录</a>
					<a href="#other/reg">注册</a>
					<a @click="backTop">回到顶部</a>
				</div>
				<div class="top">
					客服热线:400-108-5518(工作日9:00-18:00)<br />
					Copyright ©2017 京030072
				</div>
			</div>
		</div>
	</template>

	<script>
		export default{

			methods:{
				backTop:function(){
					javascript:scroll(0,0)
					// document.body.scrollTop=0;
				},
				handleScroll:function(){
					var a = document.getElementById("nav")
					if(a){
						console.log(a);
						if(scrollY >= 40){
							a.style.position = "fixed";
							a.style.top= 0;
							a.style.zIndex = 5
						}else{
							a.style.position= "static";
						}
					}
					
				}
			},
			mounted(){

				window.addEventListener('scroll', this.handleScroll);

			}
		}
	</script>


	<style scoped>
		.active{
			border-bottom: 0.05rem solid #ce1b27;
			box-sizing: border-box;
		}
		.header{
			height: 0.4rem;
			display: flex;
			font-size: 0.16rem;
		}
		.logo{
			height: 0.345rem;
			width: 0.875rem;
			float: left;
		}
		.my{
			width: 0.225rem;
			height: 0.235rem;
			float: left;
			margin: 0.05rem;
			margin-top: 0.12rem;
		}
		.car{
			width: 0.3rem;
			height: 0.235rem;
			float: left;
			margin-top: 0.12rem;
		}
		.search{
			height: 0.24rem;
			width: 2.59rem;
			margin-top: 0.12rem;
		}
		.inp_sear{
			width: 1.9rem;
			height: 0.2rem;
			float: left;
			border-color: #393a3f;
		}
		.inp_btn{
			float: left;
			background: #393a3f;
			border: 0;
			height: 0.24rem;
			width: 0.3rem;
			color: white;
			font-size: 0.12rem;
		}
		.nav{
			font-size: 0.14rem;
		}
		.nav ul{
			height: 0.368rem;
			width: 3.6rem;
			background:#f0424e;
		}
		.nav ul li{
			float: left;
			list-style-type: none;
			width: 0.6rem;
			height: 0.368rem;
		}
		.nav ul li a{
			display: block;
			line-height: 0.368rem;
			text-align: center
		}
		.nav a{
			text-decoration: none;
			color: white;
		}
		.footer{
			height: 1.2rem;
			margin-bottom: 0.6rem;
			background: #ececec;
			font-size: 0.16rem;
		}
		.user{
			height: 0.7rem;
			line-height: 0.7rem;
			display: flex;
			justify-content: space-between;
			padding: 0 0.3rem;
		}
		.top{
			height: 0.5rem;
			font-size: 0.14rem;
			text-align: center;
			color: #666;
		}
		.footer a{
			text-decoration: none;
			color: #666;
		}

	</style>