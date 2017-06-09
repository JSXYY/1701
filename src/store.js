import vue from "vue";
import vuex from "vuex";
import axios from "axios";
import api from "./api";
import { Toast } from 'mint-ui';
vue.use(vuex);


const store = new vuex.Store({
//服务器应该存储用户名，密码，购物车『商品id 商品数量【暂时不考虑商品样式，可以把商品样式看作一个新的商品】』
//当页面刚开始加载就应该从服务器请求用户名下面的购物车列表，购物车列表应该包含，商品id和商品数量
//将从服务器查找到的数据【商品id和商品数量】放入addshopcarlist中
//从addshopcarlist中查找D1服务器中的商品信息，放入datalist中
//当每次点击添加到购物车按钮时候，先检查addshopcarlist中是否存在商品id，存在不添加，不存在添加id和数量1
//当在购物车列表删除datalist中的物品时候，返回一个id，同时删除addshopcarlist中的id
//(function(){
//	this.state.datalist=['08100299','3','01207353','2'];
//});
//mounted(){
//	console.log('hello');
//},
	state:{

		//用于购物车页面展示,点击结算将把其中的id和num发送给服务器
		datalist:[],
		//下面这个只存储商品id，这是从服务器查找到的
		addshopcarlist:[],
		shopcarsuccess:false,
		headPortrait:"http://bpic.588ku.com/element_origin_min_pic/01/37/09/22573c3a831082c.jpg"
//		username:'',

//		func:(function(){
//			console.log(this.state.addshopcarlist);
//		})()
//		addaxios(){
//			addshopcarlist=['08100299','2','01207353','2',"01207358","3"]
//		}

	},

	actions:{
		"ADD_SHOPCAR_ACTION":function(store,num,payload){
			// console.log(payload);
			//可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
			//通过commit 方法把数据提交给mutations
			//
			var all1=null;
//			console.log(arguments[1]);
			all1=num.split("&")
			store.commit("ADD_SHOPCAR_MUTATION",all1);
			store.commit('todb',payload);
		},

		"DEL_SHOPCAR_ACTION":function(store,payload){
			// console.log(payload);
			//可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
			//通过commit 方法把数据提交给mutations
			//
			store.commit("DEL_SHOPCAR_MUTATION",payload);
			store.commit('todb',payload);
		},
		"add_goodsnum_action":function(store,payload){
			store.commit("add_goodsnum_mutation",payload);
			store.commit('todb',payload);

		},
		"del_goodsnum_action":function(store,payload){
			store.commit("del_goodsnum_mutation",payload);
			store.commit('todb',payload);

		},
		'todba':function(store,payload){
			store.commit('todb',payload);
		},

	},

	mutations:{
		"ADD_SHOPCAR_MUTATION":function(state,num,payload){
			// console.log(payload);
			let inhave=true;
			for(let i=0;i<state.addshopcarlist.length;i++){
				if(state.addshopcarlist[i]>100){
//						console.log(state.addshopcarlist[i]==num[1]);

					if(state.addshopcarlist[i]==num[1]){
						inhave=false;
						break;
					}
				}
			}
			if(inhave){
				state.addshopcarlist.push(num[1]);
				state.addshopcarlist.push(num[0]);
				axios.get(api.interface+"/api/shopcar",{
			                params: {
			                ID:num[1]
			                }
			                }).then(res=>

							{
			                	addagoods(res,num[0],num[1]);
			            	}

			                )
			}
			function addagoods(res,num1,id1){
				let indatalist={
			                		name:res.data.pgdsename,
			                		id:res.data.gdsid,
			                		oldprice:res.data.saleprice,
			                		price:res.data.hyprice,
			                		num:num1,
			                		img:res.data.pimg
			                	}
			    state.datalist.push(indatalist);
			}
		},

		"DEL_SHOPCAR_MUTATION":function(state,payload){
//			console.log(payload);
			state.datalist.splice(payload,1); //删除数据
			state.addshopcarlist.splice(payload*2,2);
		},
		"add_goodsnum_mutation":function(state,payload){

			state.datalist[payload]['num']=state.datalist[payload]['num']-(-1)
			let n=0;
			n=(payload-(-1))*2-1;
			state.addshopcarlist[n]=state.addshopcarlist[n]-(-1);
		},
		"del_goodsnum_mutation":function(state,payload){

			state.datalist[payload]['num']=state.datalist[payload]['num']-(1)
			if(state.datalist[payload]['num']<0){
				state.datalist[payload]['num']=0;
			}

			let n=0;
			n=(payload-(-1))*2-1;
			state.addshopcarlist[n]=state.addshopcarlist[n]-1;
			if(state.addshopcarlist[n]<0){
				state.addshopcarlist[n]=0;
			}
		},
		//返回给数据库
		'todb':function(state,payload){
			axios.post(api.interface+"/api/shopcar",{
			                username:localStorage.username,
			                shopcar:state.addshopcarlist

			                }).then(res=>{
			                	console.log('成功提交给数据库');
			                	Toast({
			                	  message: '添加成功',
			                	  position: 'bottom',
			                	  duration: 2000
			                	});
			                })
		},
	}
})

export default store;