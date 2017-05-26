<template>
    <div class="main">
        <div class="choose_con">
            <ul class="chc_row" id="chrck">
                <li @click="goback"  data="">
                    返回上级分类
                </li>
                <li v-for="(data,index) in this.rcklist" @click="rcklistloading(data.rckcode)">
                    {{data.rckname }}
                </li>
            </ul>
        </div>
        <div class="m_plist">
            <div class="mp_sort">
                <div class="mps_con">
                    <div class="mpsc_txt"  v-if="isShow">
                        <a href="javascript:void(0)" @click="sort(4)" attr="4" :class="[this.order=='4'?'cur':'']">
                            上架时间
                        </a>
                        <a href="javascript:void(0)" @click="sort(3)"  attr="3" :class="[this.order=='3'?'cur':'']">
                            销量
                        </a>
                        <a href="javascript:void(0)" @click="sort(0)"  attr="0" :class="[this.order=='0'?'cur':'']">
                            综合
                        </a>
                    </div>
                </div>
            </div>
            <div class="mp_list">


                <a class="pmpic" v-for="data in this.pics" @click="handleUrl(data)" >
                    <img :src="data.pmpic ">
                </a>


                <ul>
                    <li v-for="(data,index) in this.products">
                        <div :class='[index%2=="0"?"iteml":"itemr2"]'>
                            <a :href="'#other/product?id='+data.p_gdsid">
                                <img :src="data.p_img "
                                border="0">
                            </a>
                        </div>
                        <div :class='[index%2=="0"?"itemr":"iteml2"]'>
                            <span class="title">
                                <a :href="'#other/product?id='+data.p_gdsid">
                                    {{data.p_gdsname }}
                                </a>
                            </span>
                            <div class="pmd">
                                <span class="phot">
                                    <font color="#f0424e">
                                         {{data.p_gdstitle }}
                                    </font>
                                </span>
                            </div>
                            <div class="ptxt">
                                <span class="pm">
                                    ￥{{data.p_mprice }}
                                </span>
                                <span class="ps">
                                    ￥
                                    <s>
                                        {{data.p_saleprice}}
                                    </s>
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="m_page"  v-if="isShow">
                    <div class="mp_cell s">
                        <a attr="012,,,4,1,,,0" @click="first"  href="javascript:void(0)">
                            首页
                        </a>
                    </div>
                    <div class="mp_cell l" @click="pre"  style="display: none;">
                        上一页
                    </div>
                    <div class="mp_cell m">
                        <span class="vselect">
                            {{this.pagenow}}/{{this.page}}&nbsp;
                            <i>
                            </i>
                        </span>
                        <select class="go_select">
                            <option :value="data" v-for="(data,index) in this.page"   >
                                第{{data}}页
                            </option>
                        </select>
                    </div>
                    <div class="mp_cell r">
                        <a attr="012,,,4,2,,,0" @click="next" href="javascript:void(0)">
                            下一页
                        </a>
                    </div>
                    <div class="mp_cell e">
                        <a attr="012,,,4,14,,,0" @click="last"  href="javascript:void(0)">
                            尾页
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script >
	import api from "../api";
    import axios from "axios";
    import { Indicator } from 'mint-ui';
    // import Swiper from "swiper";
    // console.log(Swiper);
    // import "swiper/dist/css/swiper.css"; //单独引入swiper css文件
    export default{
         watch: {
            // 如果路由有变化，会再次执行该方法
            '$route.params.id': 'fetchData'
          },
        mounted(){
            //请求后台数据
            // axios.get("/api/home").then(res=>{
            //     console.log(res);
            //     // this.datalist = res.data.data.billboards
            // })
            Indicator.open();
            if(this.$route.params.id=="3934"){
                axios.get(api.interface+"/api/getpagespg").then(res=>{
                    this.pics = res.data.pics;
                    // console.log(this.pics );
                    // console.log(res.data.products);
                    // this.datalist = res.data.data.billboards
                    Indicator.close();
                })
            }else{

                axios.get(api.interface+"/api/result",{
                    params: {
                    ID:[this.pagenow,this.$route.params.id,this.order]
                    }
                    }).then(res=>{
                    this.rcklist = res.data.rcklist;
                    this.products = res.data.products;
                    this.page = Math.ceil(res.data.page_total / res.data.products.length);
                    // console.log(this.page );
                    // console.log(res.data.products);
                    // this.datalist = res.data.data.billboards
                    Indicator.close();
                })
                }
            // axios.get("/v4/api/film/now-playing?&page=1&count=5").then(res=>{
            //     console.log(res.data);
            //     this.playinglist=res.data.data.films;
            // })
        },

        data(){
            return {
                products :[],
                rcklist :[],
                back:[this.$route.params.id],
                num:"1",
                page:'',
                select:"",
                pagenow:'1',
                order:"4",
                pics:[],
                isShow:true,
            }
        },

        methods:{
                fetchData: function(){
                    this.isShow=true;
                    this.pics=[];
                    if(this.$route.params.id!=3934){
                        Indicator.open();
                        axios.get(api.interface+"/api/result",{
                            params: {
                            ID:[this.pagenow,this.$route.params.id,this.order]
                            }
                            }).then(res=>{
                            this.rcklist = res.data.rcklist;
                            this.products = res.data.products;
                            this.page = Math.ceil(res.data.page_total / res.data.products.length);
                            // console.log(res.data.rcklist);
                            // console.log(res.data.products);
                            // this.datalist = res.data.data.billboards
                            Indicator.close();
                        })
                        // console.log(1)
                    }else{
                        this.products=[];
                        this.rcklist =[];
                        this.isShow=false;
                        Indicator.open();
                        axios.get(api.interface+"/api/getpagespg").then(res=>{
                            this.pics = res.data.pics;
                            // console.log(this.pics );
                            // console.log(res.data.products);
                            // this.datalist = res.data.data.billboards
                            Indicator.close();
                        })
                    }
                },
                rcklistloading(data){
                    this.back.push(data);
                    // console.log(this.back);
                    Indicator.open();
                    axios.get(api.interface+"/api/result",{
                        params: {
                        ID:[this.pagenow,data,this.order]
                        }
                        }).then(res=>{
                        this.rcklist = res.data.rcklist;
                        this.products = res.data.products;
                        // console.log(res.data.rcklist);
                        // console.log(res.data.products);
                        // this.datalist = res.data.data.billboards
                        Indicator.close();

                    })
                },
                handleUrl(data){
                    if(data.pmurl=='#'){
                    // console.log(1);
                        return
                    }else if(data.pmurl.lastIndexOf('shopview')!=-1){
                    // console.log(2);
                        return
                    }else{
                        if(data.pmurl.lastIndexOf('@')!=-1){
                    // console.log(3);
                            window.location.assign('#other/product'+data.pmurl.slice(data.pmurl.lastIndexOf('?'),data.pmurl.lastIndexOf('@')))
                        }else{
                    // console.log(4);
                            window.location.assign('#other/product'+data.pmurl.slice(data.pmurl.lastIndexOf('?')))
                        }
                    }
                },
                goback(){

                    this.back.pop();
                    var id = this.back[this.back.length-1];
                    // console.log(id);
                    if(id){
                        Indicator.open();
                        axios.get(api.interface+"/api/result",{
                            params: {
                            ID:[this.pagenow,id,this.order]
                            }
                            }).then(res=>{
                            this.rcklist = res.data.rcklist;
                            this.products = res.data.products;
                            // console.log(res.data.rcklist);
                            // console.log(res.data.products);
                            // this.datalist = res.data.data.billboards
                            Indicator.close();
                        })
                    }
                },
                load(){
                        Indicator.open();
                        axios.get(api.interface+"/api/result",{
                            params: {
                            ID:[this.pagenow,this.$route.params.id,this.order]
                            }
                            }).then(res=>{
                            this.rcklist = res.data.rcklist;
                            this.products = res.data.products;
                            // this.page = Math.ceil(res.data.page_total / res.data.products.length);
                            // console.log(this.page );
                            // console.log(res.data.products);
                            // this.datalist = res.data.data.billboards
                            Indicator.close();

                        })
                },
                next(){
                    // console.log(1);
                    $(".l").css("display","block");
                    if(this.pagenow<this.page){
                        this.pagenow++;
                        this.load();
                    }
                },
                last(){
                    $(".l").css("display","block");
                    this.pagenow=this.page;
                    this.load();
                },
                first(){
                    $(".l").css("display","none");
                    this.pagenow="1";
                    this.load();
                },
                pre(){
                    if(this.pagenow>1){
                        this.pagenow--
                    }
                    if(this.pagenow<2){
                        $(".l").css("display","none");
                    }
                    this.load();
                },
                sort(data){
                    // console.log(data);
                    this.order=data;
                    this.load();
                }

            // swiperload(index){
            //     if(index==this.datalist.length-1){
            //         //初始化swiper对象
            //             new Swiper('.swiper-container',{
            //                 pagination: '.swiper-pagination', //初始化 分页器
            //                 paginationClickable: true, //分页器可以点击
            //                 autoplay: 1000,
            //                 loop:true,
            //                 speed:2000
            //             });
            //     }
            // }
        },
        // directives:{
        //     "kerwinswiper":{
        //         inserted(el,binding,vnode){
        //             binding.value.callback(binding.value.index);
        //         }
        //     }
        // }
    }
</script>

<style >

    .main {
        background-color: #fff;
        font-family: 微软雅黑;
        min-width: 320px;
        margin: 0 auto;
        font-size: 30px;
    }
    .pmpic img {
        width: 100%;
    }

    .choose_con {
        font-size: .14rem;
        width: 95%;
        margin-top: .08rem;
        margin: 0 auto;
    }
    .choose_con .chc_row {
        /*border-bottom: 1px solid #dedede;*/
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 160px;
        /*border-left: 1px solid #dedede;*/
    }
/*    .chooses ul li:first-child, .choose_con ul li:first-child {
        border-left: none;
    }*/
    .chooses ul li, .choose_con ul li {
        float: left;
        display: inline-block;
        width: 33.33%;
        min-width: 88px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        /*border-top: 1px solid #dedede;*/
        border: 1px solid #dedede;
        /*border-left: none;*/
        margin: 0;
        padding: 0 1px;
        box-sizing: border-box;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .main .m_plist .mp_sort {
        height: .40rem;
        font-size: 0.14rem;
        text-align: center;
        padding: 0 15px;
        overflow: hidden;
    }
    .main .m_plist .mp_sort .mps_con {
        margin-top: 0.05rem;
        height: 0.30rem;
        width: 100%;
        padding: 2px 2px;
    }
    .main .m_plist .mp_sort .mps_con .mpsc_txt {
        display: table;
        height: 0.30rem;
        width: 100%;
    }
    .main .m_plist .mp_sort .mps_con .mpsc_txt .cur {
        /*color: #fff;*/
        color: #ed3d00;
    }
    .main .m_plist .mp_sort .mps_con .mpsc_txt a {
        display: table-cell;
        height: 0.30rem;
        color: #333;
        line-height: 0.30rem;
        width: 25%;
    }
    .main .m_plist .mp_list li {
        /*display: flex;*/
        border-bottom: 1px solid #cccccc;
        padding: 10px 6px 0 6px;
        height: 4.8333em;
        position: relative;
    }
    .main .m_plist .mp_list .iteml, .main .m_plist .mp_list .itemr2 {
        width: 4.8333em;
        height: 100%;
    }
    .main .m_plist .mp_list .iteml, .main .m_plist .mp_list .iteml2 {
       float: left;
    }
    .main .m_plist .mp_list .itemr, .main .m_plist .mp_list .itemr2 {
       float: right;
    }
    .main .m_plist .mp_list .itemr, .main .m_plist .mp_list .iteml2 {
        display: block;
        overflow: hidden;
        width: 6.7em;
        height: 100%;
    }
    .main .m_plist .mp_list .iteml img, .main .m_plist .mp_list .itemr2 img {
        border: 1px solid #f0eff5;
        padding: 2px;
        width: 4.333em;
        height: 4.333em;
    }
    .main .m_plist .mp_list .itemr .title, .main .m_plist .mp_list .iteml2 .title {
        overflow: hidden;
        height: 0.38rem;
        font-size: 0.14rem;
        display: block;
        margin: 5px 0 0;
        line-height: .18rem;
    }
    .main .m_plist .mp_list .itemr .title a, .main .m_plist .mp_list .iteml2 .title a {
        color: #663704;
    }
    .main .m_plist .mp_list .itemr .pmd, .main .m_plist .mp_list .iteml2 .pmd {
        height: 1.65em;
        margin-top: 8px;
        overflow: hidden;
        line-height: 0.20rem;
    }
    .main .m_plist .mp_list .itemr .pmd span.phot, .main .m_plist .mp_list .iteml2 .pmd span.phot {
        color: #9d9d9d;
        font-size: 0.18rem;
    }
    .main .m_plist .mp_list .itemr .ptxt, .main .m_plist .mp_list .iteml2 .ptxt {
        height: 0.50em;
        display: table;
        margin-top: 8px;
    }
    .main .m_plist .mp_list .itemr .ptxt span.pm, .main .m_plist .mp_list .iteml2 .ptxt span.pm {
        color: #ed3d00;
        font-size: 0.17rem;
        width: 0.8rem;
    }
    .main .m_plist .mp_list .itemr .ptxt span, .main .m_plist .mp_list .iteml2 .ptxt span {
        height: 0.50em;
        display: table-cell;
        width: 50%;
    }
    .main .m_plist .mp_list .itemr .ptxt span.ps, .main .m_plist .mp_list .iteml2 .ptxt span.ps {
        color: #9d9d9d;
        font-size: 0.12rem;
        width: 1rem;
    }

    .main .m_page {
        display: -webkit-box;
        display: flex;
        height: 0.29rem;
        padding: 15px;
    }
    .main .m_page>div {
        background-color: #fff;
        border: 1px solid #ccc;
        line-height: 29px;
        white-space: nowrap;
        border-radius: 2px;
        cursor: pointer;
        font-size: 0.14rem;
        text-align: center;
    }
    .main .m_page .mp_cell.s {
        width: 0.45rem;
        margin: 0 5px;
    }
    .main .m_page .mp_cell.l {
        width: 0.55rem;
        margin: 0 5px;
    }
    .main .m_page .mp_cell.m {
        -webkit-box-flex: 1;
        flex: 1;
        position: relative;
        box-shadow: 0 3px 3px #d7d7d7 inset;
        background: #fff;
    }
    .main .m_page .mp_cell .vselect i {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-left: 2px solid #9d9d9d;
        border-bottom: 2px solid #9d9d9d;
        -webkit-transform: rotate(-45deg);
        margin-left: 2px;
        margin-bottom: 2px;
    }
    .main .m_page .mp_cell .go_select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-appearance: none;
        border: 0;
        border-radius: 0;
        cursor: pointer;
        font-size: 0.14rem;
    }
    option {
        font-weight: normal;
        display: block;
        white-space: pre;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
    .main .m_page .mp_cell.r {
        width: 0.55rem;
        margin: 0 5px;
    }
    .main .m_page .mp_cell.e {
        width: 0.45rem;
        margin: 0 5px;
    }
</style>