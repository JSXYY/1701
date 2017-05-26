    <template>
        <div>
           <header class="p_header">
				<div class="h_txt">
					<div class="pageback">
						<a href="javascript:window.history.back(-1);">
						</a>
					</div>
					<div class="h_h2">
						<h2>
							会员中心
						</h2>
					</div>
				</div>
			</header>
           <div class="main">
				<div class="umenu">
					<div class="um_top">
						<i>
						</i>
						<div class="txt">
							<span id="muid">
								15634203324
							</span>
							<span id="mtype">
								普通会员
							</span>
							<span id="mscore">
								0积分
							</span>
						</div>
					</div>
					<div class="um_btm">
						<div>
							<ul class="mitem">
								<li class="bg1">
									<a href="user_orderlist.html">
										<i>
										</i>
										<span>
											我的订单
										</span>
									</a>
								</li>
								<li class="bg2">
									<a href="user_mytkts.html">
										<i>
										</i>
										<span>
											我的优惠券
										</span>
									</a>
								</li>
								<li class="bg3">
									<a href="user_myfav.html">
										<i>
										</i>
										<span>
											我的收藏
										</span>
									</a>
								</li>
							</ul>
							<ul class="mitem">
								<li class="bg4">
									<a href="user_myscore.html">
										<i>
										</i>
										<span>
											我的积分
										</span>
									</a>
								</li>
								<li class="bg5">
									<a href="user_mpwd.html">
										<i>
										</i>
										<span>
											修改密码
										</span>
									</a>
								</li>
								<li class="bg4">
									<a href="score.html">
										<i>
										</i>
										<span>
											积分商城
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
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
					<span class="top">
						<a href="#">
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

    <script >
        export default {
            // mounted(){
            //     document.addEventListener('deviceready', onDeviceReady, false);

            //     function onDeviceReady(){
            //         var i = $('.um_top').find("i");
            //             console.log(2);
            //         i.click(function(){
            //             navigator.camera.getPicture(onSuccess, onFail, {
            //                 quality: 50,
            //                 sourceType : Camera.PictureSourceType.PHOTOLIBRARY ,
            //                 allowEdit : true,
            //              });

            //             function onSuccess(imageData) {
            //                console.log(imageData);
            //             }

            //             function onFail(message) {
            //                alert('Failed because: ' + message);
            //             }
            //         })
            //     }
            // }
        }
    </script>


    <style scoped>
.p_header, .p_header input, .p_header button {
    font-size: 40px;
}
.p_header .h_txt {
    background-color: #ececec;
    -webkit-box-shadow: 0 2px 4px #d9d9d9;
    box-shadow: 0 2px 4px #d9d9d9;
    height: 1.2em;
    font-size: 1em;
    min-width: 320px;
    display: -webkit-box;
    overflow: hidden;
}
.p_header .h_txt .pageback {
    margin: .25em .10em 0 .15em;
    height: 0.666em;
    width: .50em;
    background: url(http://images.d1.com.cn/wap/2014/back2.png) no-repeat;}

.p_header .h_txt .pageback a{
    display: block;
    height: 100%;
    width: 100%;
}
 h2 {
    display: block;
    font-size: 1.5em;
    font-weight: normal;
    font-size: 0.25rem;
}
.p_header .h_txt .h_h2 {
    font-size: .25rem;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
    line-height: 1.6em;
}

/*main*/
.main {
    background-color: #fff;
    font-family: 微软雅黑;
    min-width: 320px;
    margin: .10rem auto;
    font-size: .14rem;
    max-width: 640px;
}
.main .umenu {
    background: #f6f6f6;
    padding: .10rem 0;
    border-bottom: 1px solid #a5a5a5;
}
.main .umenu .um_top {
    height: 1.00rem;
    display: -webkit-box;
    width: 90%;
    overflow: hidden;
    padding-right: 10%;
    font-size: .14rem;
}
.main .umenu .um_btm .mitem li i {
    width: 100%;
    height: 2.5em;
    display: block;
}
.main .umenu .um_top i {
    padding-left: .10rem;
    width: 1.00rem;
    height: 1.00rem;
    display: block;
    background: url(../assets/22573c3a831082c.jpg)  center center no-repeat;
    background-size: 60%
}
.mitem li.bg2 i {
    background: url(http://images.d1.com.cn/wap/2014/02.png) center center no-repeat;
    background-size: 2.3em 2.3em;
}
.mitem li.bg3 i {
    background: url(http://images.d1.com.cn/wap/2014/03.png) center center no-repeat;
    background-size: 2.3em 2.3em;
}
.mitem li.bg4 i {
    background: url(http://images.d1.com.cn/wap/2014/04.png) center center no-repeat;
    background-size: 2.3em 2.3em;
}
.main .umenu .um_btm .mitem li.bg5 i {
    background: url(http://images.d1.com.cn/wap/2014/05.png) center center no-repeat;
    background-size: 2.3em 2.3em;
}
.main .umenu .um_btm .mitem li.bg4 i {
    background: url(http://images.d1.com.cn/wap/2014/04.png) center center no-repeat;
    background-size: 2.3em 2.3em;
}
.main .umenu .um_top .txt {
    -webkit-box-flex: 1;
    flex: 1;
    line-height: .28rem;
    overflow: hidden;
}
.main .umenu .um_top .txt>span {
    width: 100%;
    height: .30rem;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-text-overflow: ellipsis;
}
span{color: #666;}
div {
    display: block;
}
.main .umenu .um_btm .mitem {
    height: .4em;
    display: table;
    width: 100%;
    padding-top: .10rem;
}
base.css:6
ul, ol {
    list-style: none;
}
.main .umenu .um_btm .mitem li {
    display: table-cell;
    text-align: center;
    width: 33.33%;
}
.main .umenu .um_btm .mitem {
    height: .4em;
    display: table;
    width: 100%;
    padding-top: .10rem;
}
.main .umenu .um_btm .mitem a{text-decoration: none;}
ul, ol {
    list-style: none;
}
/*.bg1{background: url(http://images.d1.com.cn/wap/2014/01.png) center center no-repeat;}*/
.main .umenu .um_btm .mitem li.bg1 i {
    background: url(http://images.d1.com.cn/wap/2014/01.png) center center no-repeat;
    background-size: 2.3em 2.3em;
}
/*footer*/
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