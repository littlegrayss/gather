<template>
    <div class="sports-bg">
        <span class="iconfont icon-back" @click="$router.go(-1)"></span>
        <div class="sportsInfo">
            <h4 class="location"><span class="iconfont icon-location"></span>华南师范大学</h4>
            <slot></slot>
        </div>
        <!-- <slot></slot> -->
    </div>   
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.icon-back {
    color: #fff;
    position: absolute;
    top: 14px;
    left: 12px;
    font-weight: bolder;
}
.icon-location {
    margin-right: 12px;
    color: #f04752;
}
.sports-bg {
    overflow: hidden;
    background-image: url('../assets/images/joinSports-bg.gif');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
}
.sportsInfo {
    height: 35vh;  
    box-sizing: border-box;  
    background: rgba(43,140,255,.8);
    overflow: hidden;
    color: #fff;
    padding: 75px 30px;
}
</style>