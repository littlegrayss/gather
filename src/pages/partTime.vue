<template>
    <div class="part-time">
        <sports-top>
            <h1>寻找教练</h1>
            <div>我要当教练</div>
        </sports-top>
        <div class="coach-lists">
            <coach-list v-for="item in coachLists"
                        :key="item.index"
                        :coach="item"
                        @click.native="toDetails(item.index)"
            ></coach-list>        
        </div>
    </div>
</template>

<script>
    import coachList from '../components/coachList'
    import sportsTop from '../components/sportsTop'
    export default {
        data() {
            return {
               coachLists: [
                   {
                       index: 45674,
                       name: '古天乐',
                       avatar: './static/avatar-1.jpg',
                       goodAt: '@跑步 @篮球',
                       follows: '6'
                   },
                   {
                       index: 45675,
                       name: '胡一菲',
                       avatar: './static/avatar-2.jpg',
                       goodAt: '@游泳 @排球',
                       follows: '8'
                   },
                   {
                       index: 45676,
                       name: '刘亦菲',
                       avatar: './static/avatar-3.jpg',
                       goodAt: '@乒乓球 @羽毛球',
                       follows: '1'
                   },
               ]
               
            }
        },
        methods: {
            toDetails(index) {
                this.$router.push({path:'/coachDetails',query:''})
            }
        },
        components: {
            coachList,sportsTop
        }
    }
</script>

<style scoped>
.part-time {
    overflow: hidden;
    /* padding: 10px; */
}
.coach-lists {
    padding: 10px;
    height: 62vh;
    overflow-y: scroll;
}

</style>