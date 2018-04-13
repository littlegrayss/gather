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
    import sportsJoinList from '../../components/sportsJoinList'
    export default {
        data() {
            return {
                lists: []
            }
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