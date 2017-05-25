import vue from "vue";
import VueRouter from "vue-router";

vue.use(VueRouter);

import Home from "./components/home.vue";
import My from "./components/my.vue";
import Login from "./components/login.vue";
import Product from "./components/product.vue";
import Result from "./components/result.vue";
import Reg from "./components/reg.vue";
import Shopcar from "./components/shopcar.vue";
import Other from "./components/other.vue";
import Index from "./components/index.vue"
const routes= [

	{
		path:"/",
		redirect:"/home",
	},

	{
		path:"/home",
		component:Home,
		redirect:"/home/index" , //重定向到这个子路由
	  	children:[
	  		{
	  			path:"index", //要注意，以 / 开头的嵌套路径会被当作根路径。 /film/coming-soon
	  			component:Index
	  		},
	  		{
	  			path:"result/:id",

	  			component:Result
	  		}

	  	]

	},
	{
		path:"/other",
		component:Other,
		redirect:"/other/login" ,
		children:[
			{
				path:"product", //要注意，以 / 开头的嵌套路径会被当作根路径。 /film/coming-soon
				component:Product
			},
			{
				path:"login",
				component:Login
			},
			{
				path:"reg",
				component:Reg
			},

			{
				path:"shopcar",
				component:Shopcar
			}
		]
	},
	{
		path:"/result",
		component:Result
	},

	{
		path:"/my",
		component:My
	},



]

const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}

})

export default router;