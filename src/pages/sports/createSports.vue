<template>
   
        
        <div class="panel">
            <Input v-for="(item, index) in inputLists"
                   :key="index"
                   :input="item">
            </Input>            
        </div> 
        
   
</template>

<script>
    
    import Input from '../../components/Input'
    
    export default {
        
        data() {
            return {
                inputLists: [{
                    name: 'location',
                    text: '地点',
                    type: 'text'
                },
                {
                    name: 'time',
                    text: '时间',
                    type: 'text'
                },
                {
                    name: 'people',
                    text: '人数',
                    type: 'text'
                },]
            }
        },
        components: {
            Input
        }
    }
</script>

<style scoped>
.panel {
    margin-top: 2vh;
    padding: 20px;
}

</style>