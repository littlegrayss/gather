<template>
    <div>
        <head-top :title='title' :goBack='goBack'></head-top>
        <big-tips :tips='tips'></big-tips>
    </div>
</template>

<script>
    import headTop from '../components/head'
    import bigTips from '../components/bigTips'
    export default {
        data() {
            return {
                title: '运动赛事',
                goBack: true,
                tips: '暂无赛事'
            }
        },
        components: {
            headTop,bigTips
        }
    }
</script>

<style scoped>

</style>