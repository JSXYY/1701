import vue from "vue";
import VueRouter from "vue-router";

vue.use(VueRouter);

import Home from "./components/home.vue";
import My from "./components/my.vue";
import Login from "./components/login.vue";
import Reg from "./components/reg.vue";
import Shopcar from "./components/shopcar.vue";

const routes= [

	{
		path:"/",
		redirect:"/home"
	},

	{
		path:"/home",
		component:Home
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