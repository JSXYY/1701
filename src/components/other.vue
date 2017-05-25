<template>
<div class="main">
    <div class="h_txt">
        <div class="pageback">
            <a href="javascript:window.history.back(-1);">返回</a>
        </div>
        <div class="h_h2">
            <h2>
                <i></i>{{data}}
            </h2>
        </div>
        <div class="home">
            <a href="#/home"></a>
        </div>
        <div class="myuser">
            <router-link to="login"></router-link>
        </div>
        <div class="carth">
            <router-link to="shopcar"></router-link>
        </div>
    </div>
        <router-view @mjy="handleClick"></router-view>
    <div id="footer" class="footer">

        <div class="ftxt">
            <span class="user">
                <a href="#other/login" class="l">
                    请登陆
                </a>
                <a href="#other/reg" class="r">
                    注册
                </a>
            </span>
            <span class="top" >
                <a href="javascript:scroll(0,0)">
                    回到顶部
                </a>
            </span>
        </div>
        <div class="fcopy">
            客服热线:400-108-5518(工作日9:00-18:00)
            <br>
            Copyright ©2017 京030072
        </div>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return{
                data:"",
            }
        },
        mounted(){

        },

        methods: {
            handleClick(data){
                // console.log(data);
                this.data=data;
            }
        }
    }
</script>

<style scoped>
.h_txt {
    background-color: #ececec;
    -webkit-box-shadow: 0 2px 4px #d9d9d9;
    box-shadow: 0 2px 4px #d9d9d9;
    height: 1.2em;
    font-size: 40px;
    min-width: 320px;
    display: -webkit-box;
    overflow: hidden;
}
.h_txt .pageback {
    margin: .25em .10em 0 .15em;
    height: 0.666em;
    width: .50em;
    background: url(http://images.d1.com.cn/wap/2014/back2.png) no-repeat;
    background-size: .333em .65em;
    -webkit-background-size: .333em .65em;
}
.h_txt .pageback a {
    display: block;
    height: 100%;
    width: .50em;
    color: transparent;
}
.h_txt .h_h2 {
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
    line-height: 1.2em;
}
.h_txt .h_h2 h2 {
    font-size: .25rem;
    color: #555555;
    font-weight: normal;

}
.h_txt .h_h2 h2 i {
    background: url(http://images.d1.com.cn/wap/2014/d1logo.png) no-repeat;
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
}
.h_txt .home {
    margin: .23em .10em 0 .20em;
    height: 0.59em;
    width: .65em;
    background: url(http://images.d1.com.cn/wap/2014/home.png) no-repeat;
    background-size: cover;
}
.h_txt .home a,  .h_txt .myuser a,  .h_txt .logo a,  .h_txt .carth a {
    width: 100%;
    height: 100%;
    display: block;
}
.h_txt .myuser {
    margin: .15em .10em 0 .15em;
    height: 0.65em;
    width: .65em;
    background: url(http://images.d1.com.cn/wap/2014/myd1.png) no-repeat;
    background-size: cover;
}
.h_txt .carth {
    margin: .25em .20em 0 .15em;
    height: 0.55em;
    width: .69em;
    background: url(http://images.d1.com.cn/wap/2014/cart.png) no-repeat;
    background-size: cover;
}

.footer {
    background-color: #ececec;
    -webkit-box-shadow: 0 -2px 4px #d9d9d9;
    box-shadow: 0 -2px 4px #d9d9d9;
    margin-bottom: 0.60rem;
    font-size: 0.16rem;
}
.footer .user {
    padding-left: 0.20rem;
    color: #555555;
    line-height: 0.70rem;
    width: 2.40rem;
    display: block;
}
.footer .user a.l {
    width: 1.4rem;
}
.footer .user a {
    text-decoration: none;
    display: inline-block;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.main .umenu .um_btm .mitem li a {
    width: 100%;
    display: block;
}
.footer .top {
    height: 0.70rem;
    line-height: 0.70rem;
    -webkit-box-flex: 1;
    text-align: right;
    padding-right: .30rem;
    display: block;
}
.footer .top a{text-decoration: none;}
.footer .ftxt {
    height: 0.70rem;
    width: 100%;
    display: -webkit-box;
}
.footer .top a {
    color: #666;
    display: block;
}
.footer .fcopy {
    font-size: .14rem;
    color: #666;
    text-align: center;
    width: 100%;
    height: .50rem;
    line-height: .23rem;
}

</style>