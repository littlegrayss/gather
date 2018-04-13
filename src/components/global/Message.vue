<template>
<!-- <transition name="fadeDown"> -->
    <div class="message" v-if="messageType=='hide'?false:true">
        <i class="iconfont icon-yes" v-if="messageType=='yes'?true:false"></i>
        <i class="iconfont icon-no" v-if="messageType=='no'?true:false"></i>
        <span class="message-text">{{message}}</span>
    </div>
<!-- </transition> -->
</template>

<script>
    export default {
        props: ['messageType'],
        data() {
            return {
                
            }
        },
        methods: {
            // close() {
            //     clearTimeout(this.timer);
            //     this.$store.commit('end');
            //     this.$destroy();
            //     this.$el.remove();
            // },
        },
        computed: {
            message() {
                if (this.messageType=='yes') {
                    return '成功！';
                }else if (this.messageType=='no') {
                    return '失败';
                }
            
            }
        },
        
        beforeMount() {
            // let parent;
            // parent = document.querySelector('#app');
            // if (!parent) {
            // parent = document.createElement('div');
            // parent.classList.add('notifications', this.placement);
            // document.body.appendChild(parent);
            // }
            // parent.appendChild(this.$el);
        },
        mounted() {
            
            // this.timer = setTimeout(() => this.close(), 3000);
        },
        watch: {
            
        }
    }
</script>

<style scoped>
.message {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -8vh;
    margin-left: -24vw;
    width: 48vw;
    height: 8vh;
    border-radius: 4px;
    box-shadow: 0 1px 8px rgba(155,155,155,.3);
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon-yes {
    color: green;
}
.icon-no {
    color: red;
}
.message-text {
    margin-left: 8px
}
</style>