<template>
    <div>
        <head-top :title='title' :goBack='goBack'></head-top>
        <big-tips :tips='tips'></big-tips>
        <div class="add">联系方式：15625082826  申先生</div>
    </div>
</template>

<script>
    import headTop from '../components/head'
    import bigTips from '../components/bigTips'
    export default {
        data() {
            return {
                title: '运动商城',
                goBack: true,
                tips: '期待加盟'
            }
        },
        components: {
            headTop,bigTips
        }
    }
</script>

<style scoped>
.add {
    width: 100vw;
    position: absolute;
    top: 54%;
    text-align: center;
    color: #999;
}
</style>