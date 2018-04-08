<template>
    <div class="register">
        <h4 class="subtitle">注册</h4>
        <div class="panel">
            <Input :input="login">
                <span class="tips"><span class="to-login" @click="toLogin">登录</span></span></Input>
            <Input v-for="(item, index) in inputLists"
                   :key="index"
                   :input="item">
            </Input>              
            <button class="btn">Register in</button>
        </div>
    </div>
</template>

<script>
    import Input from '../components/Input'
    export default {
        data() {
            return {
                login: {
                    name: 'email',
                    text: 'Email',
                    type: 'text'
                },
                inputLists: [
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
    
    color: rgb(43,140,255);
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
    color: rgb(43,140,255);
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
    border: 2.5px solid rgba(43,140,255,.8);
} 
.input-row input:focus {
    border: 2.5px solid blue;
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
    margin-right: 12px;
    color: rgba(43,140,255,.6);
}
.tips:hover {
    color: darkorange;
}
</style>