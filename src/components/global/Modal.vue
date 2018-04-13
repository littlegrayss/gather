<template>
    <div>
        <div class="mask"></div>
        <div class="dialog">
            <span class="dialog-text">{{message}}</span>
            <button class="dialog-btn" @click="ok">确定</button>
        </div>
    </div>
</template>

<script>
    import store from '../../store/index'
    export default {
        props: ['message'],
        methods: {
            ok() {
                this.$store.commit('off');
            }
        }
    }
</script>

<style scoped>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.4);
    z-index: 999;
}
.dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -30vw;
    margin-top: -10vh;
    width: 60vw;
    height: 20vh;
    background-color: #fff;
    z-index: 1000;
    /* box-shadow: 0 1px 6px #000; */
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}
.dialog-btn {  
    height: 52px; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(76,98,252);
    font-size: 16px;
    font-weight: bold;
    padding: 0;
    border-width: 0;
    border-top: solid 1px rgb(76,98,252);
}
.dialog-text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    flex: 1;
}
</style>