<template>
    <div>
        <head-Top :title='title'>
			<span class="to-login" @click="toLogin">登录</span>
		</head-Top>
    	<router-view></router-view>
    	<foot></foot>      
    </div>
</template>

<script>
    import headTop from '../../components/head'
    import foot from '../../components/foot'
	
    export default {
		data() {
			return {
				title: 'gather',
				goBack: false,				
			}
		},
		methods: {
			toLogin() {
				this.$router.push('./login');
			}
		},
        components: {
            headTop,foot
        }
    }
</script>

<style scoped>
.to-login {
	position: absolute;
	top: 1rem;
	left: 1rem;
	color: #fff;
	font-size: 14px
}

</style>