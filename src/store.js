import vue from "vue";
import vuex from "vuex";

vue.use(vuex);


const store = new vuex.Store({

	state:{

		datalist:[
					{
						name:'ddd',
						id:'111',
						oldprice:'1',
						price:'11',
						num:'1'
						
					},{
						name:'ccc',
						id:'222',
						oldprice:'1',
						price:'11',
						num:'1'
						
					}]

	},

	actions:{
		"ADD_SHOPCAR_ACTION":function(store,payload){
			// console.log(payload);
			//可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
			//通过commit 方法把数据提交给mutations
			//
			store.commit("ADD_SHOPCAR_MUTATION",payload);
		},

		"DEL_SHOPCAR_ACTION":function(store,payload){
			// console.log(payload);
			//可以根据这参数去后台请求数据， 也可以在这里对数据进行加工
			//通过commit 方法把数据提交给mutations
			//
			store.commit("DEL_SHOPCAR_MUTATION",payload);
		},
		"add_goodsnum_action":function(store,payload){
			store.commit("add_goodsnum_mutation",payload);
			
		},
		"del_goodsnum_action":function(store,payload){
			store.commit("del_goodsnum_mutation",payload);
			
		}
	},

	mutations:{
		"ADD_SHOPCAR_MUTATION":function(state,payload){
			// console.log(payload);
			// 操作state
			var datalist = state.datalist.filter(item=>item.id==payload.id);
			if(datalist.length==0){
				state.datalist.push(payload);
			}else{
				//num 加1
				datalist[0].num++;
			}

			// console.log(state.datalist);
		},

		"DEL_SHOPCAR_MUTATION":function(state,payload){
			console.log(payload);

			state.datalist.splice(payload,1); //删除数据
		},
		"add_goodsnum_mutation":function(state,payload){

			state.datalist[payload]['num']=state.datalist[payload]['num']-(-1)
		},
		"del_goodsnum_mutation":function(state,payload){

			state.datalist[payload]['num']=state.datalist[payload]['num']-(1)
			if(state.datalist[payload]['num']<0){
				state.datalist[payload]['num']=0;
			}
			
		
		}
	}
})

export default store;