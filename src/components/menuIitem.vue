<template>
            <router-link :to="menuInfo.url" class="tap">
                <span class="a-list">
                    <span :class="['iconfont','icon',menuInfo.icon]"></span>
                    <span class="list-text">{{menuInfo.text}}</span>
                </span>
            </router-link>
</template>

<script>
    export default {
        props: ['menuInfo']
    }
</script>

<style scoped>
.a-list {
    /* flex: 0 0 33.33vw; */
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.icon {
    font-size: 42px;
    color: rgba(43,140,255,.6);
    margin-bottom: 10px;
}
.list-text {
    font-size: 16px;
    color: #666;
}
.tap {
    flex: 0 0 33.33vw;
}
.tap:active {    
    background: rgb(43,140,255);
}
.tap:active .a-list {    
    box-shadow: 0 1px 18px rgba(43,140,255,.6)
}
.tap:active .a-list .list-text,.tap:active .a-list .icon{
    color: #fff;
}
</style>