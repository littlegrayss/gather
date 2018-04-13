<template>
    <div class="register">
        <h4 class="subtitle">注册</h4>
        <div class="panel">
            <Input :input="inputLists[0]" v-model="email">
                <span class="tips"><span class="to-login" @click="toLogin">登录</span></span>
            </Input>
            <Input :input="inputLists[1]" v-model="username" />
            <Input :input="inputLists[2]" v-model="psd" />
            <Input :input="inputLists[2]" v-model="repsd" />
                         
            <button class="btn" @click="submit">Register in</button>
        </div>
    </div>
</template>

<script>
    import Input from '../components/Input'
    export default {
        data() {
            return {  
                email: '',
                username: '',
                psd: '',
                repsd: '',                
                inputLists: [
                {
                    name: 'email',
                    text: 'Email',
                    type: 'text'
                },
                {
                    name: 'username',
                    text: 'username',
                    type: 'text'
                },
                {
                    name: 'password',
                    text: 'Password',
                    type: 'password'
                },
                {
                    name: 'rePassword',
                    text: 'Password-again',
                    type: 'password'
                }
            ]}
        },
        methods: {
            toLogin() {
                this.$router.push('./login');
            },
            submit() {
                console.log(this.email);
                console.log(this.username);
                console.log(this.psd);
                console.log(this.repsd);                
                
                if (this.email == '') {
                    alert('请输入邮箱！');
                    return false;
                }
                if (this.username == '') {
                    alert('请输入用户名！');
                    return false;
                }
                if (this.psd == '') {
                    alert('请输入密码！');
                    return false;
                }
                if (this.repsd == '') {
                    alert('请再次输入密码！');
                    return false;
                }
                if (this.psd != this.repsd) {
                    alert('两次密码不相同！');
                    return false;
                }

                
                
                var _this = this;
                this.$http.get('./api/register',{
                            params: {
                                email: this.email,
                                psd: this.psd,
                                userName: this.username
                            }
                        })
                        .then(function (res) {

                            console.log(res.data);
                            // data = JSON.parse(res.data);
                            if (res.data.code == '200') {
                                console.log('注册成功！');
                                _this.$store.commit('getUserId',res.data.userId);
                                console.log(this.$store.state.userId);
                                _this.$store.commit('yes');
                                setTimeout(function(){
                                    _this.$router.commit('hide');
                                    _this.$router.push('./home');
                                },1500);                          

                            } else {
                                console.log('注册失败！');
                                _this.$store.commit('no');
                                setTimeout(function(){
                                    _this.$router.commit('hide');
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
.subtitle {
    text-align: center;
    margin-top: 10vh; 
    font-size: 20px;
    
    color: rgb(76,98,252);
}
.panel {
    margin-top: -5vh;
    /* width: 100%; */
    /* height: 55vh; */
    padding: 20px;

}
.input-row {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin: 12px 0;

}
.input-row label {
    font-size: 14px;
    font-weight: bold;
    color: rgb(76,98,252);
    /* align-self: flex-start; */
}
.input-row input {
    /* width: 80%; */
    box-sizing: border-box;
    padding: 8px 16px;
    height: 48px;
    line-height: 1;
    font-size: 18px;
    margin-top: 8px;
    border-radius: 2px;
    outline: none;
    border: 2.5px solid rgb(76,98,252);
} 
.input-row input:focus {
    border: 2.5px solid blue;
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
    margin-right: 12px;
    color: rgba(43,140,255,.6);
}
.tips:hover {
    color: darkorange;
}
</style>