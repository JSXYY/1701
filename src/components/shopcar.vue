	<template>
		<div>
			<div v-show="!isLog" class='nolog'>
					<p class="logo">

						<!--<span>购物车图标</span>-->
						<!--<img src="../assets/cart.png" />-->
					</p>

					<p>你的购物车还没有任何商品，快去购物吧。</p>
					<!--<button>立即去购物》</button>-->
					<router-link  to="/home" class="shopnow">立即去购物》</router-link>
					<!--如果用户未登录展示页面-->
				</div>
				<div class="islog" v-show="isLog" >

					<p class="topp">D1优尚网</p>
					<ul>
						<li v-for="(data,index) in shoplist">
							<!--用户已经登录展示页面-->
							<div class="left">
								<a :href="'#/other/product?id='+data.id"><img :src="data.img"/></a>
							</div>
							<div class="left right">
								<p>
									{{data.name}}
								</p>
								<p><span class="oldprice">{{data.oldprice}}</span><span> 成交价 </span><span class="colorisred">￥{{data.price}}</span></p>
								<p>
									<!--<span> 数量：</span><button @click="data.num=data.num-1">-</button><input type="text" v-model="data.num"value="" /><button @click="data.num=data.num-(-1)">+</button>-->
									<span> 数量：</span><button class="buttons" @click="del(index)">-</button><input class="inputtext" type="text" v-model="data.num"value="" /><button class="buttons" @click="add(index)">+</button>

								</p style="margin-top: 5px;    line-height: .26rem;">
								<!--<span>尺码</span><span></span><button class="del"@click="removeTodo(index)">删除</button>-->
								<button class="del"@click="handleDelClick(index)">删除</button>
								<!--<input type="button"@click="addshopcarclick('2&08100184')"/>-->
								<!--添加两个点击事件-->
								<!--<input type="button"@click="addshopcarclick('01207252'),askshow()"/>-->

							</div>
						</li>
						<p class="total"><span class="totalleft">商品件数小计 : </span><span class="colorisred">{{sumnumber}}</span><span> 小计 : </span><span class="colorisred">{{sumprice}}</span></p>
						<!--<p class="total"><span class="totalleft">商品件数小计:</span><span class="colorisred">{{sumnumber}}</span><span>小计</span><span class="colorisred">{{sum}}</span></p>-->
					</ul>
				</div>
				<div v-show="isLog" class="bottom"style="position: fixed; bottom: 0; z-index: 10; width: 100%">
					<div class="bottoml">
						<p>商品总件数 : <span class="colorisred">{{sumnumber}}</span></p>
						<p> 总金额 : <span class="colorisred">￥{{sumprice}}</span></p>
					</div>
					<div class="bottomr">
						<span>去结算</span>
					</div>

				</div>

		</div>
	</template>

	<script >
		    import axios from "axios";
		export default {

			data(){
				return {
					isLog:true,
//					checkedValue:this.$store.state.datalist,
					username:'',
//					userpassword:"",
				}
				
			},
			watch:{
			},

//			开始执行
			mounted(){
				this.$emit('mjy',"购物车");
//				console.log(this.shopcarsuccess);
if(localStorage.username){
	//存在用户名
				isLog=true;

				if(this.$store.state.shopcarsuccess){
//					this.shopcarsuccess=false;
					axios.post("/api/usercar",{username:localStorage.username}).then(res=>{
	//			                	console.log(res.data);
				            this.$store.state.addshopcarlist=res.data.split(",");
							for(var it1 in this.$store.state.addshopcarlist){
								if(this.$store.state.addshopcarlist[it1]>100){
									let nu=it1-(-1);
									axios.get("/api/shopcar",{
						                params: {
						                ID:this.$store.state.addshopcarlist[it1]
						                }
						                }).then(res=>{
			//			                console.log(res.data);
						                // this.datalist = res.data.data.billboards
						                	let indatalist={
						                		name:res.data.pgdsename,
						                		id:res.data.gdsid,
						                		oldprice:res.data.saleprice,
						                		price:res.data.hyprice,
						                		num:this.$store.state.addshopcarlist[nu],
						                		img:res.data.pimg
						                	}
						                this.$store.state.datalist.push(indatalist);
	//					                console.log('aaaa');
	
						            	})
								}
							}
	
	
				    });
				    this.$store.state.shopcarsuccess=false;
				}
}

//传入参数，获取整个对象，处理



			},
			computed:{
//				login(){
////					axios.post('',{username:this.username})
//				}
				shoplist(){
					return this.$store.state.datalist; //拿到状态数据
				},

				sumprice(){
					var sum =0;

					this.$store.state.datalist.forEach(item=>{
						sum+= item.price*item.num;
					})

					return sum;
				},
				sumnumber(){
					var sum =0;

					this.$store.state.datalist.forEach(item=>{
						sum+= item.num-0;
					})

					return sum;
				},

  
			},
			methods:{
//				askshow(){
//					for(var it1 in this.$store.state.addshopcarlist){
//						axios.get("/api/shopcar",{
//			                params: {
//			                ID:this.$store.state.addshopcarlist[it1]
//			                }
//			                }).then(res=>{
//
//			                console.log(res.data);
//			                // this.datalist = res.data.data.billboards
//			                	let indatalist={
//			                		name:res.data.pgdsename,
//			                		id:res.data.godsid,
//			                		oldprice:res.data.saleprice,
//			                		price:res.data.hyprice,
//			                		num:1,
//			                		img:res.data.pimg
//			                	}
//			                this.$store.state.datalist.push(indatalist);
//			            	})
//					}
//				},
				//点击加入购物车要把购物车列表添加到数据库，点击删除，要把购物车列表返回给数据库
//				ADD_SHOPCAR_ACTION
				addshopcarclick(num){
					//点击添加按钮不只是要更新
//					console.log(goodsid);
					this.$store.dispatch("ADD_SHOPCAR_ACTION",num);
//							this.$store.dispatch("todba",1);

				},
				handleDelClick(index){
					this.$store.dispatch("DEL_SHOPCAR_ACTION",index);
//							this.$store.dispatch("todba",1);

				},
				del(index){
					this.$store.dispatch("del_goodsnum_action",index);
//							this.$store.dispatch("todba",1);

				},
				add(index){
					this.$store.dispatch("add_goodsnum_action",index);
//							this.$store.dispatch("todba",1);

				},

				start(){
			//	判断是否登录，如果登录
			//
				},
//				removeTodo(index){
//					this.$store.state.datalist.splice(index, 1);
//							this.$store.dispatch("todba",1);
//
//				},

			}

		}
	</script>


	<style scoped>

		.bottomr span{
		    cursor: pointer;
		    display: inline-block;
		    background: #cf1719;
		    color: #fff;
		    text-align: center;
		    line-height: .40rem;
		    font-size: .18rem;
		    width: 1.5rem;
		    height: .40rem;
		    margin-top: 5px;
		    border-radius: 5px;
		}
		.inputtext{
			display: inline-block;
		    padding: 0;
		    margin: 0;
		    font-size: 0.12rem;
		    width: .50rem;
		    height: 0.18rem;
		    text-align: center;
		    line-height: .18rem;
		    border: 1px solid #c9cbc6;
		}
		.buttons{
			margin: 0 4px;
		    cursor: pointer;
		    display: inline-block;
		    background-color: white;
		    font-size: 0.12rem;
		    width: 0.18rem;
		    height: 0.18rem;
		    text-align: center;
		    line-height: .18rem;
		    border: 1px solid #c9cbc6;
		}

		.maindiv{
		}
		div{
			font-size: .14rem;
		}
		.nolog{
			text-align: center;
			.logo{
				img{
					height: 10rem;
				}
			}
		}
		.logo{
			display: block;
		    height: 1.2rem;
		    margin-top: .20rem;
		    background: url(http://images.d1.com.cn/wap/2014/cart.png) center no-repeat;
		    background-size: .90rem auto;
		}
		.nolog p{
		    font-size: .14rem;
			color: #bfbfbf;
		}
		.nolog .shopnow{
		    margin-top: .20rem;
		    margin-left: 15%;
		    border-radius: 5px;
		    line-height: .36rem;
		    width: 70%;
		    height: .36rem;
		    background: #c00000;
		    color: #ffffff;
		    text-align: center;
		    display: block;
		    text-decoration: none;
		}
		.topp{
		    background: #ededed;
		    height: 0.48rem;
		    border-bottom: 1px solid #c6c6c6;
		    line-height: 0.48rem;
		    padding-left: 0.15rem;
		    font-size: 0.16rem;

		}
		.total{
			/*text-align:right*/
			/*background: red;*/
			float: right;
			display: block;
			-webkit-margin-before: 1em;
			-webkit-margin-after: 1em;
			-webkit-margin-start: 0px;
			-webkit-margin-end: 0px;
			margin: 0.1rem;
		}
		.total .totalleft{
			/*margin-left: 2rem;*/
		}
		.colorisred{
			 color: #cf1719;
		}
		.islog ul li img{
			float: left;
			    width: 0.80rem;
			    height: 0.80rem;
			    padding: 3px;
			    border: 1px solid #c9cbc6;
		}
		.islog ul{
				/*padding: 0.15rem;*/
				font-size: 0.12rem;
		}
		.islog ul li{
			font-size: 0.12rem;
			line-height: .32rem;
			list-style: none;
			overflow: hidden;
			border-bottom: 1px solid black;
			padding: 0.05rem;
			/*margin-left: -0.25rem;*/
		}
		.left{
			float: left;
		}
		.left img{
			margin-top: 0.1rem;
			margin-right: 0.1rem;
		}
		.right{
			margin-left:0.05rem;
		}
		.oldprice{
			text-decoration: line-through;
		}
		.del{
			float: right;
			right: .20rem;
		    bottom: 0;
		    margin-left: 1.2rem;
		    margin-top: 0.1rem;
		    display: inline-block;
		    width: .60rem;
		    height: .20rem;
		    line-height: .20rem;
		    border: 1px solid #c9cbc6;
		    border-radius: 3px;
		    background-color: #f5f4f4;
		    background: -webkit-gradient(linear,0 0,0 100%,from(#fffeff),to(#f5f4f4));
		    text-align: center;
		    cursor: pointer;
		}
		.bottom{
			    height: .50rem;
			    background: #C0C0C0;
			    font-size: .16rem;
			    display: -webkit-box;
			    margin-top: .15rem;
		}
		.bottoml{
				line-height: 0.24rem;
			    padding-left: .10rem;
			    width: 50%;
			    color: #fff;
		}

	</style>