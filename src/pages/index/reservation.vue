<template>
    <div>
         <div class="panel">
                <sportsJoinList
                    v-for="list in lists"
                    :key="list.index"
                    :list="list"                    
                ></sportsJoinList>
            </div> 
    </div>
</template>

<script>
    import store from "../../store/index";
    import sportsJoinList from '../../components/sportsJoinList'
    export default {
        created() {
            this.getLists();
        },
        data() {
            return {
                lists: []
            }
        },
        methods: {
            getLists() {
                var _this = this;
                var userId = this.$store.state.userId;
                if (!userId) {
                    this.$store.commit('on','请先登录'); 
                    this.$router.push('/login');			
                }
                //http://www.littlegray.xin:8801
                this.$http
                    .get("./api/reservation", {
                        params: {
                            userId:userId
                        }
                    })
                    .then(function(res) {
                    console.log(res.data);
                    // data = JSON.parse(res.data);
                    _this.lists = res.data;
                    })
                    .catch(function(error) {
                    console.log(error);
                    });
            },
        },
        components: {
            sportsJoinList
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