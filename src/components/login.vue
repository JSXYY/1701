    <template>
    	<div>
    		<div class="login">
    			<div class="login_err">
    			</div>
    			<div class="login_user">
    				<span class="htxt">
    					帐号：</span>
    				<span class="l_input">
    					<input name="user" id="user" placeholder="手机号/邮箱/用户名" type="text">
    				</span>
    			</div>
    			<div class="login_pwd">
    				<span class="htxt">
    					密码：
    				</span>
    				<span class="l_input">
    					<input name="pwd" id="pwd" type="password">
    				</span>
    			</div>
    			<div class="login_but">
    				<a href="javascript:void(0);" id="loginbut" class="loginbut">
    					登录
    				</a>
    				<div class="regfind">
    					<span>
    						<a href="#/other/reg">
    							<i class="i1">
    							</i>
    							<br>
    							手机注册
    						</a>
    					</span>
    					<span>
    						<a href="http://m.d1.cn/wap/regmail.html">
    							<i class="i2">
    							</i>
    							<br>
    							邮箱注册
    						</a>
    					</span>
    					<span>
    						<a href="http://m.d1.cn/wap/forgetpwd.jsp">
    							<i class="i3">
    							</i>
    							<br>
    							找回密码
    						</a>
    					</span>
    				</div>
    			</div>
    		</div>
        </div>
    </template>

    <script >
        export default {

        }
    </script>


    <style scoped>

	    .main{
	    	background: #ffffff;
	    	font-family: "微软雅黑";
	    	min-width: 320px;
	    	margin: 0 auto;
	    }
	    .main .login{
	    	padding: 0.2rem 0.2rem 0 0.2rem;
	    }
	    .main .login .login_user{
	    	vertical-align: middle;
	    	height: 0.4rem;
	    	margin: 0.15rem;
	    	line-height: 0.4rem;
	    	font-size: 0.18rem;
	    	border: 1px solid #9f9f9f;
	    }
	    .main .login .login_user .htxt{
	    	display: block;
	    	padding: 0 0.2px 0 10px;
	    	font-size: 0.14rem;
	    	float: left;
	    }
	    .main .login .login_user .l_input{
	    	display: block;
	    	float: left;
	    }
	    .main .login .login_user .l_input input{
	    	border: none;
	    	font-size: 0.18rem;
	    	height: 0.35rem;
	    	width: 100%;
	    	outline: none;
	    	color: #666666;
	    }
	    .main .login .login_pwd{
	    	vertical-align: middle;
	    	height: 0.4rem;
	    	margin: 0.15rem;
	    	line-height: 0.4rem;
	    	font-size: 0.18rem;
	    	border: 1px solid #9f9f9f;
	    }
	    .main .login .login_pwd .htxt{
	    	display: block;
	    	padding: 0 0.2px 0 10px;
	    	font-size: 0.14rem;
	    	float: left;
	    }
	    .main .login .login_pwd .l_input{
	    	display: block;
	    	float: left;
	    }
	    .main .login .login_pwd .l_input input{
	    	border: none;
	    	font-size: 0.18rem;
	    	height: 0.35rem;
	    	width: 100%;
	    	outline: none;
	    	color: #666666;
	    }
	    .main .login .login_but{
	    	padding: 0.1rem;
	    }
	    .main .login .login_but .loginbut{
	    	display: block;
	    	width: 100%;
	    	height: 0.36rem;
	    	background: #f1424f;
	    	color: #FFFFFF;
	    	font-size: 0.16rem;
	    	border-radius: 4px;
	    	text-align: center;
	    	line-height: 0.36rem;
	    }
	    .main .login .login_but .regfind{
	    	display: table;
	    	height: 0.7rem;
	    	width: 100%;
	    	line-height: 0.16rem;
	    	margin-top: 0.1rem;
	    }
	    .main .login .login_but .regfind span{
	    	display: table-cell;
	    	font-size: 0.14rem;
	    	text-align: center;
	    }
	    .main .login .login_but .regfind span a{
	    	color: #c61621;
	    	text-decoration: underline;
	    	display: inline-block;
	    	width: 100%;
	    	height: 100%;
	    }
	    .main .login .login_but .regfind span a i{
	    	width: 0.6rem;
	    	height: 0.5rem;
	    	display: inline-block;
	    }
	    .main .login .login_but .regfind span a .i1{
	    	background: url(http://images.d1.com.cn/wap/2014/b1.png)  no-repeat;
	    	background-size: auto 0.4rem;
	    }
	    .main .login .login_but .regfind span a .i2{
	    	background: url(http://images.d1.com.cn/wap/2014/b2.png)  no-repeat;
	    	background-size: auto 0.4rem;
	    }
	    .main .login .login_but .regfind span a .i3{
	    	background: url(http://images.d1.com.cn/wap/2014/b3.png)  no-repeat;
	    	background-size: auto 0.4rem;
	    }
    </style>