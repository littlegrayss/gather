<template>
    <header id='head_top'>
        <slot></slot>
        <span class="head_goback iconfont icon-back" v-if="goBack" @click="$router.go(-1)"></span>
        <span class="title_head">{{title}}</span>
        <!-- <span></span> -->
    </header>
</template>

<script>
    // import {mapState, mapActions} from 'vuex'
    export default {
        props:['title','goBack'],
    	data(){
            return{
               
            }
        },
        mounted(){
            //获取用户信息
            // this.getUserInfo();

        },
        // props: ['signinUp', 'headTitle'],
        computed: {
            // ...mapState([
            //     'userInfo'
            // ]),
        },
        methods: {
            // ...mapActions([
            //     'getUserInfo'
            // ]),
        },

    }

</script>

<style scoped>
   

    #head_top{
        background-color: rgb(76,98,252); 
        /* background-color: rgb(43,140,255);  */
        /* position: fixed;
        z-index: 100;
        left: 0;
        top: 0; */
        width: 100%;
        height: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .title_head{
        /* margin-top: 1.2rem; */
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
    }
    .title_text{
            
            text-align: center;
            
    }
    
     .head_goback {
        position: absolute;
        top: 50%;
        left:0;
        padding-left: 0.4rem;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        margin-left: .4rem;
        margin-top: -1.5rem;
        color: #fff;
    }
    /* .head_goback::before {
        content: '<';
        color: #fff;
        font-size: 1.2rem;
    } */
    /*.head_login{
        right: 0.55rem;
        
    }
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
           
        }
    
    
        .title_text{
            
            text-align: center;
            font-weight: bold;
        } */
    
</style>




