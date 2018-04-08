<template>
    <div>
        <head-top :title='title' :goBack='goBack'></head-top>
       
    </div>
</template>

<script>
    import headTop from '../../components/head'
    export default {
        data() {
            return {
                title: '帮助与反馈',
                goBack: true,
            }
        },
        components: {
            headTop
        }
    }
</script>

<style scoped>

</style>