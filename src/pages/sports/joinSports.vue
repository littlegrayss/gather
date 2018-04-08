<template>

            <div class="panel">
                <sportsJoinList
                    v-for="list in lists"
                    :key="list.index"
                    :list="list"
                    @click.native="choose(list.index)"
                    :class="activeIndex == list.index? 'list-actived':''"
                ></sportsJoinList>
            </div> 
  
</template>

<script>
    import sportsTop from '../../components/sportsTop'
    import sportsJoinList from '../../components/sportsJoinList'
    import bottomBar from '../../components/bottomBar'

    export default {
        
        data() {
            return {
                activeIndex: 0,
                choosed: false,
                lists:[{
                    index: 23455,
                    avatar: '/static/avatar-1.jpg',
                    location: '南区篮球场',
                    time: '3月15日17:00',
                    people: '2'
                },
                {
                    index: 23456,
                    avatar: '/static/avatar-2.jpg',
                    location: '风雨球场',
                    time: '3月15日17:30',
                    people: '1'
                },
                {
                    index: 23457,
                    avatar: '/static/avatar-3.jpg',
                    location: '风雨球场',
                    time: '3月15日17:30',
                    people: '4'
                },
                {
                    index: 23458,
                    avatar: '/static/avatar-1.jpg',
                    location: '风雨球场',
                    time: '3月15日17:30',
                    people: '1'
                },
                ]
            }
        },
        methods: {
            choose(index) { 
                this.activeIndex = index;  
                this.$emit('listenToChoose',true);
                console.log(this.activeIndex);
                
            }
        },
        components: {
            sportsTop,sportsJoinList,bottomBar
        }
    }
</script>

<style scoped>
.panel {
    overflow-y: scroll;
    height: 65vh;
    background: #fff;
    
}


</style>