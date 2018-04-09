<template>
    <div>
        <sports-top>
            <h1>篮球 <span class="iconfont icon-bottom"></span></h1>
        </sports-top> 
        <transition name="slide-fade"  mode="out-in">
            <router-view v-on:listenToChoose="show"></router-view>  
        </transition>     
        <bottom-bar :text="btnText" :isChoose="isChoose">
            <button class="btn create" @click="toCreateSports" v-if="isCreate">Create Sports</button>
        </bottom-bar>
    </div>    
</template>

<script>
    import sportsTop from '../../components/sportsTop'
    import joinSports from './joinSports'
    import createSports from './createSports'
    import bottomBar from '../../components/bottomBar'    

    export default {
        data() {
            return {               
                isChoose: false,
                
            }
        },
        methods: {
            toCreateSports() { 
                this.$router.push({ path: './sports/createSports' });
            },
            show(data) {
                this.isChoose = data;
                console.log(data);                
            },
            
        },
        computed: {
            isCreate() {
                return this.$route.path == '/sports' ? true : false;
            }, 
            btnText() {
                return this.$route.path == '/sports' ? 'Join In' : 'Create';
            } 
            
        },
        components: {
            sportsTop,createSports,bottomBar,joinSports
        }
    }
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>