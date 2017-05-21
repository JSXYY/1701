import vue from "vue";
import VueRouter from "vue-router";

vue.use(VueRouter);

import Home from "./components/home.vue";
import My from "./components/my.vue";
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
		path:"/my",
		component:My
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