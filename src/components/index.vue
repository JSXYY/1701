<template>
	<div class="main"
		 v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check ="false"
        infinite-scroll-distance="100">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="(data,index) in swiperList"
						v-swiperList="index"
				        >
							<img :src="data.pmpic">
				        </div>
				    </div>
				    <!-- 如果需要分页器 -->
				    <div class="swiper-pagination"></div>
				</div>
				<div class="mp_list">
					<div class="imgDiv">
						<a href="#my">
							<img src="../assets/menu201503_01_2.jpg"/>
						</a>
					</div>
					<div class="imgDiv">
						<a href="#other/shopcar">
							<img src="../assets/menu201503_02_2.jpg"/>
						</a>
					</div>
					<div class="imgDiv">
						<a href="">
							<img src="../assets/menu201503_03_2.jpg"/>
						</a>
					</div>
					<div class="imgDiv">
						<a href="">
							<img src="../assets/menu201503_04_2.jpg"/>
						</a>
					</div>
				</div>
				<div class="mp_list_tm">
					<div class="tmtit">
						<p>创意清单</p>
					</div>
					<ul>
						<li v-for = "data in originalityList" @click = "handelClick(data)">
							
								<img :src="data.pmpic" style="height:100%;width:100%">	
							
						</li>

					</ul>
				</div>
				<div class="mp_list_sg">
					<div class="tmtit" style="margin-left: 0">
						<p>创意主题</p>
					</div>
					<div class="newlist" style="margin-top:8px">
						<div class="listimg" v-for="data in tjList"  @click = "handelClick(data)">
								<a>
								<img :src="data.pmpic" style="height:100%;width:100%"/>
								</a>
							<h4>{{data.pmtitle}}</h4>
						</div>
					</div>
				</div>
				<div class="mp_list_host">
					<div class="tmtit">
						<p>创意爆款</p>
					</div>
					<div class="host_list">
						<div v-for="(data,index) in hostList"  @click = "handelClick(data)">
							<a>
								<img :src="hostSrc[index]"style="height:100%;width:100%">
							</a>
							<p class="host_p1">{{data.p_title}}</p>
							<p class="host_p2">{{data.p_ename}}</p>
							<p class="host_p3">￥{{data.p_mprice}}</p>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
	import api from "../api";
	import { Indicator } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	import Vue from "vue";
	Vue.use(InfiniteScroll);
	import Swiper from "swiper";
	import axios from "axios";
	import "swiper/dist/css/swiper.css"
		export default {
			data(){
				return{
					swiperList:[],
					originalityList:[],
					tjList:[],
					hostList:[],
					num:1,
					hostSrc:[],
					isLoad:true,
					loading:false,
				}
			},
			methods:{
				handelClick:function(a){
					var urlStr = a.pmurl;
					var subUrl = "";
					var resultUrl = "";
					if(a.p_gdsid){

						window.location.assign("#/other/product?id=" + a.p_gdsid)
					}else{
						if (urlStr.indexOf("rackcode") != -1) {
						subUrl = urlStr.substring(urlStr.indexOf("rackcode"));
						var resultUrl =subUrl.substring(subUrl.indexOf("=") + 1);
						window.location.assign("#/home/result/" + resultUrl)

						}else if (urlStr.indexOf("shopview") != -1) {
							subUrl = urlStr.substring(urlStr.indexOf("shopview"));
							resultUrl = ("?id=" + subUrl.substring(subUrl.indexOf("=") + 1))

						}else if(urlStr.indexOf("product") != -1) {
							subUrl = urlStr.substring(urlStr.indexOf("product"));
							resultUrl = ("?id=" + subUrl.substring(subUrl.indexOf("=") + 1));
							window.location.assign("#/other/product" + resultUrl)
						}

					}

				},
				loadMore:function(){
					if(this.isLoad){
						this.loading = true;
						Indicator.open();
						axios.get(api.interface+"/api/loading",{
		                    params: {
		                    	ID:this.num
		                    }
		                    }).then(res=>{
		                    	
		                   	this.hostList = [...this.hostList,...res.data.products];
		                   	for(var i = (this.num-1)*8; i < this.hostList.length; i++){
		                   		this.hostSrc.push("http://m.d1.cn" + this.hostList[i].p_img) 
		                   	}
		                    this.num++
		                    Indicator.close();
		                    this.loading = false;
	               			}).catch(err=>{
	               				this.isLoad = false;
	               			 	Indicator.close();
		                   	// console.log(this.hostSrc)
	               			 	
	               		})
	               	}

				}
			},
			mounted(){
				Indicator.open();
				axios.get(api.interface+"/api/home").then(res=>{
					
					this.swiperList = res.data.lblist;
					this.originalityList = res.data.pmlist;
					this.tjList = res.data.tjlist;
					/*this.hostList = res.data.plistsyc*/
					Indicator.close();
				});

			},
			directives:{
				"swiperList":{
					inserted(el,binding,vnode){
						if(binding.value==vnode.context.swiperList.length-1){
							var swiper = new Swiper('.swiper-container',{
                                pagination: '.swiper-pagination', //初始化 分页器
                                paginationClickable: true, //分页器可以点击
                                autoplay: 3000,
                                loop:true,
                                speed:1000,
                                
                            });
						}
					}
				}
			}

		}
</script>
<style scoped>
		.swiper-wrapper{
			height: 1.82rem;
		}
		.swiper-container{
			margin-top: 0.08rem;
		}
		.swiper-wrapper img{
			height: 1.82rem;
		}
		.swiper-slide{
			width: 100%;
			height: 100%;
		}
		.mp_list{
			height: 0.72rem;
			width: 3.44rem;
			margin: 0.08rem;
			display: flex;
			font-size: 0.16rem;
		}
		.mp_list div{
			height: 0.72rem;
			width: 0.86rem;
		}
		.mp_list img{
			width: 100%;
			height: 100%;
		}
		.mp_list a{
			display: block;
			height: 0.72rem;
		}
		.tmtit{
			font-size: 0.16rem;
			height: 0.36rem;
			width: 3.44rem;
			margin: 0 8px;
			border-left: 0.04rem solid #f14050;
			box-sizing: border-box;
			line-height: 0.36rem;
			padding-left: 0.12rem;
			background: white;
		}
		.main{
			background: #f6f6f6;
			font-size: 0.16rem;
		}
		.mp_list_tm ul{
			width: 3.44rem;
			margin: 8px;
		}
		.mp_list_tm li{
			width: 1.68rem;
			height: 0.92rem;
			list-style: none;
			margin: 0.017rem;
			display: inline-block;
		}
		.mp_list_sg{
			width: 3.44rem;
			margin: 0 8px;
		}
		.listimg{
			width: 3.44rem;
			height: 1.8rem;
		}
		.listimg a{
			display: block;
			height: 1.5rem;
		}
		.listimg h4{
			text-align: center;
			font-size: 0.14rem;
			color: #000;
			font-weight:600
		}
		.host_list{
			width: 3.44rem;
			margin: 8px;
		}
		.host_list div{
			width: 1.6855rem;
			height: 2.62rem;
			display: inline-block;
			border-bottom: 1px solid #b2b2b2;
		}
		.host_list div a{
			height: 1.6855rem;
			width: 1.6855rem;
			background: #ccc;
			display: block;
		}
		.host_p1,.host_p2,.host_p3{
			width: 1.618rem;
			margin: 0 4px;
		}
		.host_p1{
			font-size: 0.12rem;
			height: 0.4rem;
			color: #2b2b2b;
			line-height: 0.18rem
		}
		.host_p2{
			font-size: 0.12rem;
			height: 0.2rem;
			color: #888888;
		}
		.host_p3{
			font-size: 0.18rem;
			height: 0.224rem;
			color: #f1424f;
		}
	
</style>