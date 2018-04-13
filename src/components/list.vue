<template>
<router-link :to="list.url">
    <div class="list">        
        <span class="icon iconfont" :class="list.icon"></span>
        <span class="text">{{list.text}}</span>
        <span class="right iconfont icon-right"></span>        
    </div>
    </router-link>
</template>

<script>
    export default {
        props: ['list']
    }
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3.6rem;   
    border-top: .05rem solid #e6e6e6
}
.icon {
    color: rgb(76,98,252);
    padding-left: 1.4rem;
    padding-top: .4rem;
    font-size: 2rem;
}
.text {
    display: block;
    text-align: left;
    padding-left: 1.4rem;
    width:100%;
    /* height: 100%; */
    color: #666;
    font-size: 1.2rem;
}
.right {
    padding-right: .75rem;
    color: #999;
}
/* .right::before {
    content: '>';
    color: #999;
} */
</style>