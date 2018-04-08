<template>
        <div class="menu-lists"> 
            <menu-item v-for="(item, index) in menuItems"
                       :key="index"
                       :menuInfo="item"
            ></menu-item>           
        </div>
</template>

<script>
    import menuItem from './menuIitem'
    export default {
        data() {
            return {
                menuItems: [
                    {
                        text: '寻找教练',
                        icon: 'icon-part-time',
                        url: '/partTime'
                    },
                    {
                        text: '加入运动',
                        icon: 'icon-home',
                        url: '/sports'
                    },
                    {
                        text: '运动场地',
                        icon: 'icon-site',
                        url: ''
                    },
                    {
                        text: '运动比赛',
                        icon: 'icon-game',
                        url: ''
                    },
                    {
                        text: '球友聊天',
                        icon: 'icon-chat',
                        url: ''
                    },
                    {
                        text: '运动商城',
                        icon: 'icon-shop',
                        url: ''
                    },
                    
                ]
            }
        },
        components: {
            menuItem
        }
    }
</script>

<style scoped>
.menu-lists {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
</style>