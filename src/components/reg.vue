    <template>
        <div>
            <header class="p_header">
				<div class="h_txt">
					<div class="pageback">
						<a href="javascript:window.history.back(-1);"></a>
					</div>
					<div class="h_h2">
						<h2>
							<i>
							</i>
							手机注册
						</h2>
					</div>
					<div class="home">
						<a href="/wap/index.html">
						</a>
					</div>
					<div class="myuser">
						<a href="/wap/user/index.html">
						</a>
					</div>
					<div class="carth">
						<a href="/wap/flow.html">
						</a>
					</div>
				</div>
			</header>
        	<div class="main">
				<div class="phonecode  pd">
					<div class="msg">
						温馨提示：如您在电脑上已注册过D1优尚网账号可直接登陆，无需再次注册。
						<a href="/wap/login.html" class="gologin">
							直接登陆
						</a>
					</div>
					<div class="getcode">
						<div class="ph_err">
						</div>
						<input name="phone" id="phone" class="phonec" type="text" placeholder="输入手机号">
						<div class="yztxt">
							<input name="yzcode" id="yzcode" placeholder="请输入右侧图片数字" class="yzcode mgt10"
							type="text">
							<img id="vPic" class="vPic" style="vertical-align: bottom; cursor: pointer; margin-top: 3px;"
							width="75" height="31" src="/ImageCode?r=2">
							<a style="background: none; color: #575757;" href="javascript:getyzcode();">
								刷新
							</a>
						</div>
						<a href="javascript:is_phone(this);" class="butcode">
							获取验证码
						</a>
						</div>
				</div>
				<div class="phonereg  pd">
					<p class="msg">
						如果您已收到短信激活码，请填入短信激活码提交
					</p>
					<div class="regtxt">
						<div class="reg_err">
						</div>
						<input id="backurl" name="backurl" type="hidden" value="http://m.d1.cn/wap/login.html">
						<input name="code" id="code" class="regin mgt10" type="text" placeholder="输入短信激活码">
						<input name="pwd" id="pwd" class="regin mgt10" type="password" placeholder="输入初始化密码（密码长度6~14位）">
						<p>
							支持数字、符号、字母、字母区分大小写
						</p>
						<a href="javascript:reg();" class="regbut">
							提交
						</a>
			</div>
		</div>
				<div class="memo pd">
				==注册会员的好处==
				<br>
				1、购买商品可享受D1优尚会员优惠资格。
				<br>
				2、累计购物积分，兑换礼品。
				<br>
				3、开启收藏夹功能。
				<br>
				</div>
        	</div>
			
			<div class="reg_msg" id="regmsg" style="display: none;">
	</div>
       </div>	
    </template>

    <script >
        export default {

        }
    </script>


    <style scoped>
	*{
    		margin: 0;
    		padding: 0;
    	}
    	.p_header{
	    	font-size: 40px;
	    	color: #555555;
	    	font-weight: normal;
	    	text-align: center;
	    	background: rgb(236, 236, 236);
	    	overflow: hidden;
	    }
	    .p_header .pageback{
	    	float: left;
	    	margin: 0.25em 0.1em 0.15em;
	    	height: 0.666em;
	    	width: 0.5em;
	    	background:url(http://images.d1.com.cn/wap/2014/back2.png) no-repeat;	    	
	    }
	    .p_header .h_h2{
	    	text-align: center;
	    	line-height: 1.2em;	
	    	float: left;
	    	width: 2.294rem;
	    }
	    .p_header .h_h2 h2{
	    	font-size: 0.25rem;
	    	color: #555555;
	    	font-weight: normal;
	    }
	    .p_header .h_h2 h2 i{
	    	width: 40px;
	    	height: 40px;
	    	display: inline-block;
	    	vertical-align: middle;
	    	background: url(http://images.d1.com.cn/wap/2014/d1logo.png) no-repeat;
	    }
	    .p_header .home{
	    	float: left;
	    	background: url(http://images.d1.com.cn/wap/2014/home.png) no-repeat;
	    	margin: 0.23em 0.1em 0.2em;
	    	height: 0.59em;
	    	width: 0.65em;
	    	background-size: cover;
	    }
	    .p_header .myuser{
	    	float: left;
	    	background: url(http://images.d1.com.cn/wap/2014/myd1.png) no-repeat;
	    	margin: 0.23em 0.1em 0.2em;
	    	height: 0.59em;
	    	width: 0.65em;
	    	background-size: cover;
	    }
	    .p_header .carth{
	    	float: left;
	    	background: url(http://images.d1.com.cn/wap/2014/cart.png) no-repeat;
	    	margin: 0.23em 0.1em 0.2em;
	    	height: 0.59em;
	    	width: 0.65em;
	    	background-size: cover;
	    }

/*main*/
.main {
    background-color: #fff;
    font-family: 微软雅黑;
    min-width: 320px;
    margin: 0 auto;
    font-size: .14rem;
}
.main .phonecode {
    color: #e80017;
}
.main .pd {
    padding: .10rem .25rem;
}
.main .phonecode {
    color: #e80017;
}
.main .phonecode .msg .gologin {
    display: inline-block;
    width: .95rem;
    margin-top: .05rem;
}

.main .phonecode .msg a, .main .phonecode .getcode a, .main .phonereg .regtxt a {
    height: .38rem;
    line-height: .38rem;
    background: #f1424f;
    color: #fff;
    font-size: .16rem;
    text-align: center;
    border-radius: .05rem;
}
.main .phonecode .getcode .phonec, .main .phonereg .regtxt .regin {
    width: 90%;
    height: .40rem;
    border: 1px solid #b2b2b2;
    line-height: .40rem;
}
.main input {
    font-size: .14rem;
    padding-left: .08rem;
}
.main .phonecode .getcode .butcode {
    display: block;
    width: 45%;
    margin-top: .15rem;
}

.main .phonereg, .main .memo {
    color: #575757;
}
.main .pd {
    padding: .10rem .25rem;
}
.main .phonereg .msg {
    line-height: .23rem;
}
.main .phonereg .regtxt {
    margin-top: .10rem;
}
.main .memo {
    padding-bottom: .15rem;
    line-height: .30rem;
}

.main .phonereg, .main .memo {
    color: #575757;
}
    </style>