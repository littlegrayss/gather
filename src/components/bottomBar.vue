<template>
    <div class="bottom-bar" >
        <slot></slot>
        
    </div>
</template>

<script>
    export default {
        props: ['text','isSelect'],
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 48px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
}
.btn {
    box-sizing: border-box;
    border: 1px solid rgba(43,140,255,.8);
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: rgba(43,140,255,.8);
    color: #fff;
    width: 50%;
    /* margin-left: 50vw; */
    cursor: pointer;
    font-weight: bold;
    font-size: 16px
}
.active {
    background-color: rgba(43,140,255,.8);
}
.btn.create {
    border: 1px solid rgba(255,188,14,.8);
    background-color: rgba(255,188,14,.8);
}
</style>