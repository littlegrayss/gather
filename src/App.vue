<template>
	<div id="app">
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		
		<modal v-if="isModal" :message="'敬请期待'"></modal>
		<!-- <message :messageType="messageType" ></message> -->
    </div>
</template>

<script>
	import Modal from './components/Modal'
	// import Message from './components/Message'
	import store from './store'
  	export default {	
		//   data()	   {
		// 	  return {
		// 		  messageType: 
		// 	  }
		//   },
		  beforeCreate() {
			top.window.moveTo(0,0);  
			//判断是否为IE浏览器  
			if (document.all)   
			{  
				top.window.resizeTo(screen.availWidth,screen.availHeight);  
			}  
			//判断是否为Netscape浏览器(document.layers是Netscape 4.x专有的属性，由于  
			//document.layers在Netscape6.0以后已经取消，此方法只适用于6.0之前的浏览器)  
			
			else if (document.layers||document.getElementById)   
			{  
			if(top.window.outerHeight<screen.availHeight||  
			top.window.outerWidth<screen.availWidth)  
			{  
				top.window.outerHeight = screen.availHeight;  
				top.window.outerWidth = screen.availWidth;  
			}  
			}  
		  },
		  computed:{
				isModal(){
					return this.$store.state.isModal;
				},
				// messageType() {
				// 	return this.$store.state.messageType;
				// }
				
			},
    	components:{
            Modal
        },
  	}

</script>

<style>
body {
	margin:0;
	padding: 0;
	font-family: '微软雅黑'
}
a,a:hover,a:active,a:link,a:visited,a:focus {
	text-decoration: none;
	border:none;    
    outline:none;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color:transparent;
	color: #222;
}
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
