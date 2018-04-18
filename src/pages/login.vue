<template>
    <div class="login">
        <div class="login-title">
            <h1 class="main-title">Gather</h1>
            <h4 class="subtitle">登录</h4>
        </div>
        <div class="panel">            
            <Input :input="inputLists.email" v-model="email">
                <span class="tips">
                    <span class="to-register" @click="toRegister">注册</span>/<span class="to-forget">忘记密码</span>
                </span>
            </Input>
            <Input :input="inputLists.password" v-model="psd" />
            <button class="btn" @click="submit">Login in</button>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    import Input from '../components/Input'
    
import { setTimeout } from 'timers';
    export default {
        data() {
            return {
                email: '',
                    psd: '',
                inputLists: {
                    
                    email: {
                        name: 'email',
                        text: 'Email',
                        type: 'text'
                    },
                    password: {
                        name: 'password',
                        text: 'Password',
                        type: 'password'
                    }
                }
            }
        },
        methods: {
            toRegister() {
                this.$router.push('./register');
            },
            submit() {
                if (this.email == '') {
                    this.$store.commit('on','请输入邮箱');
                    return false;
                }
                if (this.psd == '') {
                    this.$store.commit('on','请输入密码');
                    return false;
                }
                //http://www.littlegray.xin:8801
                var _this = this;            
                this.$http.get('./api/login',{
                            params: {
                                email: this.email,
                                psd: this.psd,
                            }
                        })
                        .then(function (res) {
                            console.log(res.data);
                            // data = JSON.parse(res.data);
                            if (res.data.code == '200') {
                                console.log('登录成功！');
                                _this.$store.commit('getUserId',res.data.userId);
                                console.log(_this.$store.state.userId);
                                _this.$store.commit('yes');
                                setTimeout(function(){
                                    _this.$store.commit('hide');
                                    _this.$router.push('./home');
                                },1500);                          

                            } else {
                                console.log('登录失败！');
                                _this.$store.commit('no');
                                setTimeout(function(){
                                    _this.$store.commit('hide');
                                    _this.email = '';
                                    _this.psd = '';
                                },1500);
                            }
                            
                                              
                        })
                        .catch(function (error) {
                            console.log(error);
                        }); 
                
            }
        },
        components: {
            Input
        }
    }
</script>

<style scoped>
.login {
    overflow: hidden;    
}
.login-title {
    text-align: center;
    /* margin-top: 10vh; */
    /* font-size: 24px; */
    /* font-weight: bolder; */
    color: rgb(76,98,252);
}

.subtitle {
    font-size: 20px;
    color: rgb(76,98,252);
}
.panel {
    margin-top: 5vh;
    padding: 20px;

}
.btn {
    /* background-color:  */
    box-sizing: border-box;
    border: 1px solid rgb(76,98,252);
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    border-radius: 2px;
    background-color: rgb(76,98,252);
    color: #fff;
    width: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px
}

.tips {
    font-size: 12px;
    float: right;
    margin-right: 4px;
    color: rgba(43,140,255,.6);
}
.to-register,.to-forget {
    cursor: pointer;
}
.to-register:hover, .to-forget:hover {
    color: darkorange;
}
</style>