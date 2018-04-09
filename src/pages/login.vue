<template>
    <div class="login">
        <div class="login-title">
            <h1 class="main-title">Gather</h1>
            <h4 class="subtitle">登录</h4>
        </div>
        <div class="panel">            
            <Input :input="inputLists.email">
                <span class="tips"><span class="to-register" @click="toRegister">注册</span>/<span class="to-forget">忘记密码</span></span>
            </Input>
            <Input :input="inputLists.password"></Input>
            <button class="btn" @click="submit">Login in</button>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    import Input from '../components/Input'
    export default {
        data() {
            return {
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

                // this.$store.commit('yes');
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
    color: rgb(43,140,255);
}

.subtitle {
    font-size: 20px;
    color: rgba(43,140,250,.8);
}
.panel {
    margin-top: 5vh;
    padding: 20px;

}
.btn {
    /* background-color:  */
    box-sizing: border-box;
    border: 1px solid rgba(43,140,255,.8);
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    border-radius: 2px;
    background-color: rgba(43,140,255,.8);
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