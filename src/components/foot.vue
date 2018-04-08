<template>
    <section id='foot-guide'>
    	
        <section @click = "gotoAddress('/home')" class="guide-item" v-bind:class="[isActive('home')]">
        	<i class="iconfont icon-home icon-style"></i>
            <span>首页</span>
        </section>
        <section @click = "gotoAddress('/reservation')" class="guide-item" v-bind:class="[isActive('reservation')]">
        	<i class="iconfont icon-reservation icon-style"></i>
            <span>预约</span>
        </section>
        <section @click = "gotoAddress('/circle')" class="guide-item" v-bind:class="[isActive('circle')]">
        	<i class="iconfont icon-circle icon-style"></i>
            <span>生活圈</span>
        </section>
        <section @click = "gotoAddress('/profile')" class="guide-item" v-bind:class="[isActive('profile')]">
        	<i v-bind:class="[isActive('profile') , 'iconfont','icon-style','icon-profile']"></i>
            <span>我的</span>
        </section>
    </section>
</template>

<script>
    // import {mapState} from 'vuex'
    // import '//at.alicdn.com/t/font-590120-9oz71rstk4mo0f6r.css'
    import '../assets/styles/iconfont.css'
    export default {
    	data(){
            return{
                
            }
        },
        created(){
           
        },
        mounted(){
            
        },
        computed: {
            // ...mapState([
            //     'geohash'
            // ]),
        },
        methods: {
        	gotoAddress(path){
        		this.$router.push(path)
            },
            isActive(url) {
                return this.$route.path.indexOf(url) !== -1? 'actived' : ''
            }
        },

    }

</script>

<style scoped>

    #foot-guide{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3.4rem;
        width: 100%;
        display: flex;
        /* box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1); */
        box-shadow: 0 -1rem 2rem rgba(240,258,253,1)
    }
    .guide-item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
        align-items: center;
        color: #999;
    }
	.icon-style{
        margin-top: .4rem;
        font-size: 1.6rem;
		
	}
	.guide-item span{
        padding-top: .2rem;
        font-size:.65rem;
	    		
    }
    .actived {
        color: rgb(65,172,241);
        
    }
    
   
</style>
