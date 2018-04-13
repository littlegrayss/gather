<template>
    <div>        
        <div class="panel">
            <Input :input="inputLists[0]" v-model="site"/>
            <Input :input="inputLists[1]" v-model="time"/>
            <Input :input="inputLists[2]" v-model="people"/>                       
        </div> 
                
        <bottom-bar>            
            <button class="btn" @click="submitCreateSports">Create Sports</button>
        </bottom-bar>
    </div>  
</template>

<script>
    import bottomBar from "../../components/bottomBar";
    import Input from '../../components/Input'
    
    export default {        
        data() {
            return {
                site: '',
                time: '',
                people: '',
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
        methods: {
            submitCreateSports() {
                 if (this.site == '') {
                    this.$store.commit('on','请输入地点');
                    return false;
                }
                if (this.time == '') {
                    this.$store.commit('on','请输入时间');
                    return false;
                }
                if (this.people == '') {
                    this.$store.commit('on','请输入人数');
                    return false;
                }

                 var _this = this;

                //http://www.littlegray.xin:8801
                this.$http
                .get("http://www.littlegray.xin:8801/api/create_sports",{
                    params: {
                        type: 'football',
                        time: _this.time,
                        site: _this.site,
                        totalPeople: _this.people,
                        userId: _this.$store.state.userId
                    }
                })
                .then(function(res) {
                    console.log(res.data);
                    // data = JSON.parse(res.data);
                   if (res.data.code == 200) {
                       console.log('创建成功！');
                       _this.$store.commit('yes');
                       setTimeout(function(){
                            _this.$store.commit('hide');
                            _this.$router.push('/home');
                        },1500); 
                   } else {
                       console.log('创建失败！');
                       _this.$store.commit('no');
                       setTimeout(function(){
                            _this.$store.commit('hide');                            
                        },1500);
                   }                    
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        },
        components: {
            Input,bottomBar
        }
    }
</script>

<style scoped>
.panel {
    /* margin-top: 1vh; */
    padding: 20px;
    box-sizing: border-box;
}

</style>