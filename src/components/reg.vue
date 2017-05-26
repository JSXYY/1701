    <template>
        <div>
        	<form action="/reg/validata" method="post">
        		<div class="main">
				<div class="phonecode  pd">
					<div class="msg">
						温馨提示：如您在电脑上已注册过D1优尚网账号可直接登陆，无需再次注册。
						<a class="gologin">
							直接登陆
						</a>
					</div>
					<div class="getcode">
						<div class="ph_err">
						</div>
						<input name="phone" id="phone" class="phonec" type="text" placeholder="输入手机号"   v-model="phoneNum">
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
						<input name="pwd" id="pwd" class="regin mgt10" type="password" placeholder="输入初始化密码（密码长度6~14位）"  v-model="password">
						<p>
							支持数字、符号、字母、字母区分大小写
						</p>
						<a class="regbut" @click="register()">
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
			</form>
       </div>
    </template>

    <script >


    	import axios from "axios"

      	import router from "../router"

      	export default{
      		data(){
      			return{
      				phoneNum:"",
      				password:""
      			}
      		},
      		methods:{
      			register(){
      				//console.log("111")
      				axios.post("/api/reg",{
      					username:this.phoneNum,
      					userpassword:this.password
      				}).then(res=>{
      					console.log(res)
      					if(res.data=="创建成功"){
      						router.push("/other/login")
      					}else{
      						alert("已有该用户")
      					}
      				})
      			}
      		},

            mounted(){
                this.$emit('mjy',"注册");

            }
        }
    </script>


    <style scoped>

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
.main .yztxt .yzcode {
    width: 50%;
    height: .40rem;
    border: 1px solid #b2b2b2;
    line-height: .40rem;
    display: inline-block;
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
.main .phonereg .regtxt a {
	display: block;
	width:90%;
}
.main .phonereg, .main .memo {
    color: #575757;
}
.main .phonereg .regtxt p {
    color: #e80017;
    line-height: .30rem;
}
.main .phonecode .getcode .phonec, .main .phonereg .regtxt .regin {
    width: 90%;
    height: .40rem;
    border: 1px solid #b2b2b2;
    line-height: .40rem;
}
.main .phonereg .regtxt input{
	background-color: greenyellow;
}
.main input {
    font-size: .14rem;
    padding-left: .08rem;
}
.main .mgt10 {
    margin-top: .10rem;
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