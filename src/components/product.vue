    <template>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
        infinite-scroll-immediate-check ="false"
        infinite-scroll-distance="0">
            <div class="p_item">
                <div class="pi_img">

                    <div class="imgbox">
                        <swipe class="my-swipe" :show-indicators="false">
                          <swipe-item v-for="data in this.data.gimgitems"><img :src="data.gimgitem "></swipe-item>
                        </swipe>
                        <!-- <div class="page-nub">
                            <em id="slide-nub" class="fz18">
                                4
                            </em>
                            <em class="nub-bg">
                                /
                            </em>
                            <em id="slide-sum" class="fz12">
                                {{bannerlength}}
                            </em>
                        </div> -->
                    </div>
                </div>
                <h1>
                    {{data.pgdsname }}
                </h1>
                <h2>
                    {{data.pgdsename}}
                </h2>
                <h3>
                   {{data.shoptxt  }}
                </h3>
                <h4>
                </h4>
                <h5>
                   {{data.pgdstitle }}
                </h5>
                <div class="pi_price">
                    <div class="actt">
                        会员价：
                    </div>
                    <div class="price">
                        <span class="mprice">
                            <font class="py">
                                ￥
                            </font>
                            {{data.hyprice}}
                        </span>
                        <span class="sprice">
                            市场价：￥{{data.saleprice}}
                        </span>
                    </div>
                    <div class="actzk">
                        <span class="zk">
                            <!-- {{data.hyprice/data.saleprice | currency}} -->
                            {{discount}}
                            折
                        </span>
                    </div>
                </div>
                <div class="pi_std">
                    <a name="psku" style="width:1px;height:1px;margin:0;padding:0;">
                    </a>
                    <div class="pis_grp" style="display: none;">
                    </div>
                    <div class="pis_sku" style="display: none;">
                    </div>
                    <div class="pis_count">
                        <span>
                            商品数量：
                        </span>
                        <span class="pcount">
                            <a @click="minus()" class="r">
                                -
                            </a>
                            <input type="text" class="num" v-model="num" id="pnum" name="pnum">
                            <a @click="add()" class="l">
                                +
                            </a>
                        </span>
                    </div>
                    <div class="pis_bot">
                    </div>
                </div>
                <div v-show="length" class="pi_dtl pcomt" style="border-top: 8px solid #E8E6E6">
                    <div class="pid_com" style="border-left: 4px solid #f14050;">
                        <a href="gdscom.html?id=01207353">
                            商品评价
                            <img src="http://images.d1.com.cn/images2014/index/star.png" border="0">
                            <img src="http://images.d1.com.cn/images2014/index/star.png" border="0">
                            <img src="http://images.d1.com.cn/images2014/index/star.png" border="0">
                            <img src="http://images.d1.com.cn/images2014/index/star.png" border="0">
                            <img src="http://images.d1.com.cn/images2014/index/star.png" border="0">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{length}}人评论
                        </a>
                    </div>
                </div>
                <div class="comslist">
                    <ul>
                        <li v-for="data in data.coms">
                            <div class="item">
                                <div class="itop">
                                    <span class="l">
                                        {{data.crname}}&nbsp;&nbsp;{{data.stime }}&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </div>
                                <div class="txt">
                                    {{data.ctxt }}&nbsp;&nbsp;
                                    <font color="red">
                                    </font>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pi_dtl pdtl">
                <div class="pid_p">
                    继续拖动，查看图文详情
                    <br>
                    （为了保证最佳浏览效果，建议横屏看）
                </div>
            </div>
            <div class="detail" id="detail" v-html="getgdsdetail">


            </div>



            <div class="pis_cart" id="cart1" style="position: fixed; bottom: 0; z-index: 10;">
                <div class="pisc_but">
                    <a class="fav l" id="fav" ><span></span>收藏商品</a>
                </div>
                <div class="pisc_but">
                    <a id="add_cart" @click="addshopcarclick" class="add_cart  r" ><span></span>加入购物车</a>
                </div>
            </div>

            <div class="bottom-to-top" title="返回顶部"  @click="gotop" style="display:block">
                <img src="http:///images.d1.com.cn/images2016/gtotop.png" style="width: 100%;">
            </div>
        </div>
    </template>

    <script >
        import Vue from "vue";
	    import api from "../api";

        import axios from "axios";
        import { Indicator } from 'mint-ui';
        import { Swipe, SwipeItem } from 'vue-swipe';
        import "vue-swipe/dist/vue-swipe.css";
        // Vue.use(infiniteScroll);
        Vue.component('swipe', Swipe);
        Vue.component('swipe-item', SwipeItem);
        export default {
            props: {
                  showIndicators: {
                    type: Boolean,
                    default: false
                  }
            },
            data(){
                return{
                    data:[],
                    loading:false,
                    length:'',
                    getgdsdetail:"",
                    num:"1",
                    bannerlength:'',
                    goback:true,
                }
            },
            watch: {
               // 如果路由有变化，会再次执行该方法
               // '$route.query.id': ['fetchData2']
             },
            mounted(){
                javascript:scroll(0,0);
                this.goback = true;
                this.$emit('mjy',"商品详情");
                Indicator.open();
                axios.get(api.interface+"/api/product",{
                    params: {
                    ID:this.$route.query.id
                    }
                    }).then(res=>{
                    this.data = res.data;
                    this.length = res.data.coms.length;
                    this.bannerlength = res.data.gimgitems.length;
                    // this.products = res.data.products;
                    // console.log(res.data.coms.length);
                    // console.log(this.data);
                    // this.datalist = res.data.data.billboards
                    Indicator.close();
                })
            },
            methods: {
                addshopcarclick(){
                    //点击添加按钮不只是要更新
                    this.$store.dispatch("ADD_SHOPCAR_ACTION",this.num+"&"+this.$route.query.id);

                },
                // fetchData2: function(){
                //     javascript:scroll(0,0);
                //     console.log(1);
                //     if(this.$route.query.id){
                //         // console.log(this.$route.query.id);
                //     Indicator.open();
                //     axios.get("/api/product",{
                //         params: {
                //         ID:this.$route.query.id
                //         }
                //         }).then(res=>{
                //         this.data = res.data;
                //         // console.log(this.$route.query.id);
                //         this.length = res.data.coms.length;
                //         this.bannerlength = res.data.gimgitems.length;
                //         // this.products = res.data.products;
                //         // console.log(res.data.coms.length);
                //         // console.log(res.data.products);
                //         // this.datalist = res.data.data.billboards
                //         // Indicator.close();
                //     })
                //     }
                // },
                loadMore(){
                    // console.log(2);
                    // console.log(this.data.gdsid)
                    // console.log(this.goback)
                    if(this.data.gdsid&& this.goback){
                    // console.log(this.data.gdsid)
                    this.loading = true;
                    Indicator.open();
                    axios.get(api.interface+"/api/getgdsdetail",{
                        params: {
                        ID:this.data.gdsid
                        }
                        }).then(res=>{
                        // console.log(this.goback);
                        this.goback = false;
                        this.getgdsdetail = res.data.gdsdetail ;
                        // console.log(res.data.gdsdetail);
                        // this.datalist = res.data.data.billboards
                        Indicator.close();
                        this.loading = false;
                    })
                    }

                    // if(this.num>this.total){
                    //     //所有数据请求完成
                    //     this.message = "没有更多数据了..."
                    //     return ;
                    // }
                    // axios.get("/v4/api/film/now-playing",{
                    //     params:{
                    //         page:this.num++,
                    //         count:7
                    //     }
                    // }).then(res=>{
                    //     console.log(res.data);
                    //     //数组解构
                    //     this.datalist = [...this.datalist,...res.data.data.films];

                    //     this.loading = false;
                    //     //防止数据多次加载
                    //     this.total = res.data.data.page.total;
                    // })
                },
                gotop(){
                    javascript:scroll(0,0)
                    // $('html').animate({scrollTop: '0px'},100)
                },
                minus(){
                    if(this.num>1){
                        this.num--;
                    }
                },
                add(){
                    this.num++;
                }
            },
            computed: {
                discount(){
                   var num = this.data.hyprice/this.data.saleprice*10;
                    // console.log();
                    // return ().toFixed(2)*10
                    return num.toFixed(1);
                }
            },
            created (){
                  // this.$emit('mjy',"我的");
            },


        }
    </script>


    <style  >


        .main .p_item {
            padding: 0 0.08rem;
        }
        .main .p_item .pi_img {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-align: center;
            -webkit-box-pack: center;
        }
        div.imgbox  img {
            width: 3.2rem;
            height: 3.2rem;
        }

        .imgbox  {
            width: 3.2rem;
            height: 3.2rem;
            overflow: hidden;
            margin: 0 auto;
            position: relative;
        }
        .imgbox .page-nub {
            z-index: 11;
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            background: rgba(0,0,0,0.5);
            right: 15px;
            bottom: 11px;
            text-align: center;
            line-height: 38px;
            font-size: 0px;
            overflow: hidden;
            font-family: PingFangSC-Regular,Helvetica,"Droid Sans",Arial,sans-serif;
        }
        .imgbox .fz18 {
            font-size: 16px;
            display: inline-block;
            color: #fff;
            margin-right: 3px;
        }
        .imgbox .nub-bg {
            display: inline-block;
            color: #fff;
            font-size: 14px;
        }
        .imgbox .fz12 {
            font-size: 14px;
            color: #fff;
            margin-left: 0px;
        }
        .main .p_item h1 {
            font-size: 0.16rem;
            line-height: 0.32rem;
            font-weight: normal;
        }
        .main .p_item h2 {
            font-size: 0.14rem;
            color: #adadad;
            line-height: 0.25rem;
            font-weight: normal;
        }
        .p_item h3 {
            font-size: .12rem;
            color: #999;
            font-weight: normal;
        }
        .p_item h5,h4 {
            font-size: .12rem;
            color: red;
            font-weight: normal;
        }
        .main .p_item .pi_price {
            background: #db372e;
            height: 0.77rem;
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            color: #ffffff;
            margin-top: 0.1rem;
        }
        .main .p_item .pi_price .actt {
            width: 0.75rem;
            padding-top: 0.20rem;
            margin-left: 0.15rem;
            background: #be1623;
            font-size: 0.16rem;
            text-align: center;
        }
        .main .p_item .pi_price .price {
            width: 1.3rem;
            padding-left: 0.10rem;
            font-family: 微软雅黑;
        }
        .main .p_item .pi_price .price .mprice {
            font-size: 0.28rem;
            font-weight: bold;
            line-height: 0.36rem;
            display: block;
        }
        .main .p_item .pi_price .price .py {
            font-size: 0.20rem;
        }
        .main .p_item .pi_price .price .sprice {
            font-size: 0.12rem;
            font-weight: normal;
            line-height: 0.25rem;
            display: block;
        }
        .main .p_item .pi_price .actzk {
            -webkit-box-flex: 1;
            padding-top: .15rem;
        }
        .main .p_item .pi_price .actzk .zk {
            line-height: .22rem;
            font-size: 0.12rem;
            width: 0.50rem;
            height: 0.22rem;
            background: #ef950b;
            text-align: center;
            display: block;
        }
        .main .p_item .pi_std {
            font-size: 0.16rem;
            margin-top: 0.10rem;
        }
        .main .p_item .pi_std .pis_count {
            height: 0.50rem;
        }
        .main .p_item .pi_std .pis_count .pcount {
            display: inline-block;
            height: .34rem;
            border: 1px solid #999;
            border-radius: 3px;
            line-height: .34rem;
        }
        .main .p_item .pi_std .pis_count .pcount .r {
            border-right: 1px solid #999;
        }
        .main .p_item .pi_std .pis_count .pcount .num {
            padding: 0;
            text-align: center;
            border: 0;
            width: .35rem;
            height: .32rem;
            line-height: .32rem;
            font-size: .14rem;
            color: #333;
            background-color: #f5f4f4;
            background: -webkit-gradient(linear,0 0,0 100%,from(#fffeff),to(#f5f4f4));
        }
        .main .p_item .pi_std .pis_count .pcount .l {
            border-left: 1px solid #999;
        }
        .main .p_item .pi_std .pis_count .pcount a {
            display: inline-block;
            width: .33rem;
            height: .33rem;
            border-radius: 3px 0 0 3px;
            background-color: #f5f4f4;
            background: -webkit-gradient(linear,0 0,0 100%,from(#fffeff),to(#f5f4f4));
            text-align: center;
            cursor: pointer;
        }
        .main .pis_bot {
            height: 0.50rem;
        }
        .main .p_item .pi_dtl {
            margin-top: 0.08rem;
            font-size: 0.16rem;
        }
        .main .p_item .pi_dtl .pid_com {
            position: relative;
            padding-left: 0.15rem;
            height: 0.50rem;
            line-height: 0.50rem;
            border-bottom: 1px solid #cccccc;
        }
        .main .p_item .pi_dtl .pid_com img {
            vertical-align: middle;
            width: .14rem;
            height: .14rem;
        }
        .main .comslist li {
            max-height: .75rem;
            border-bottom: 1px solid #ededed;
            padding-top: .08rem;
        }
        .main .comslist li .item {
            max-height: .75rem;
            font-size: .14rem;
        }
        .main .comslist li .item .itop {
            display: block;
            width: 100%;
        }
        .main .comslist li .item .itop .l {
            display: block;
            width: 100%;
            height: .25rem;
            line-height: .24rem;
        }
        .main .comslist li .item .txt {
            max-height: .50rem;
            line-height: .25rem;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-text-overflow: ellipsis;
        }


        .main .pdtl {
            margin-top: 0.08rem;
            font-size: 0.16rem;
            background-color: #D8D6D6;
            height: 60px;
            line-height: 25px;
            color: #686868;
            text-align: center;
        }

        .main .detail {
            margin: 10px;
            width: 95%;
            font-size: .12rem;
        }
        .main .detail img {
            display: block;
            width: 100%;
        }
        .main .pis_cart {
            width: 100%;
            padding: 5px 0;
            background: #f1f1f5;
            font-size: .14rem;
        }
        .main .pis_cart .pisc_but {
            width: 48%;
            text-align: center;
            display: inline-block;
        }
        .main .pis_cart .pisc_but .l {
            background: #ff9c00;
        }
        .main .pis_cart .pisc_but a {
            display: block;
            height: .35rem;
            margin: 0 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-border-radius: 0.05rem;
            border-radius: 0.05rem;
            line-height: .35rem;
            font-size: .14rem;
            color: #ffffff;
            text-align: center;
            cursor: pointer;
        }
        .main .pis_cart .l span {
            margin-right: 5px;
            vertical-align: -6px;
            width: 20px;
            height: 20px;
            display: inline-block;
            background: url(http://images.d1.com.cn/wap/2014/fav.png) no-repeat;
            background-size: 18px auto;
        }
        .main .pis_cart .pisc_but .r {
            background: #d20001;
        }
        .main .pis_cart .r span {
            margin-right: 5px;
            vertical-align: -6px;
            width: 20px;
            height: 20px;
            display: inline-block;
            background: url(http://images.d1.com.cn/wap/2014/cart.png) no-repeat;
            background-size: 20px auto;
        }


        .bottom-to-top {
            position: fixed;
            bottom: 150px;
            right: 8px;
            width: 35px;
            height: 35px;
            z-index: 20;
            display: none;
            cursor: pointer;
        }
        .bottom-to-top img{
            float: left;
        }
    </style>