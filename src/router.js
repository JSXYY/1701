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
	  			path:"result",

	  			component:Result
	  		}

	  	]

	},
	{
		path:"/product",
		component:Product
	},
	{
		path:"/result",
		component:Result
	},

	{
		path:"/my",
		component:My
	},
	{
		path:"/login",
		component:Login
	},
	{
		path:"/reg",
		component:Reg
	},

	{
		path:"/shopcar",
		component:Shopcar
	}

]

const router = new VueRouter({
	routes
})

export default router;