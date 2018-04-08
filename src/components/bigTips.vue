<template>
    <div class="list">{{tips}}</div>
    
</template>

<script>
    export default {
        props: ['tips']
    }
</script>

<style scoped>
.list {
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    width: 100vw;  
    /* margin-top: 3rem; */
    text-align: center;    
    color: #999;
    font-size: 2rem;
    z-index: -1;
}
</style>