<template>
    <div>
        <sports-top>
            <h1 @click="chooseType">{{sportsType}} <span class="iconfont icon-bottom"></span></h1>
        </sports-top> 
        <transition name="slide-fade"  mode="out-in">
            <router-view v-on:listenToChoose="show" class="panel" :lists="lists"></router-view>  
        </transition>        

        <div class="modal" v-if="isChooseBox">
            <div class="choose-box">
                <div class="text">请选择运动</div>
                <div class="content">
                    <div class="a-box" @click="check('篮球','0')">篮球<span class="badge">{{sportsNum[0]}}</span></div>
                    <div class="a-box" @click="check('足球','1')">足球<span class="badge">{{sportsNum[1]}}</span></div>
                    <div class="a-box" @click="check('排球','2')">排球<span class="badge">{{sportsNum[2]}}</span></div>
                    <div class="a-box" @click="check('跑步','3')">跑步<span class="badge">{{sportsNum[3]}}</span></div>
                    <div class="a-box" @click="check('羽毛球','4')">羽毛球<span class="badge">{{sportsNum[4]}}</span></div>
                    <div class="a-box" @click="check('网球','5')">网球<span class="badge">{{sportsNum[5]}}</span></div>
                    <div class="a-box" @click="check('乒乓球','6')">乒乓球<span class="badge">{{sportsNum[6]}}</span></div>
                    <div class="a-box" @click="check('游泳','7')">游泳<span class="badge">{{sportsNum[7]}}</span></div>
                    <div class="a-box" @click="check('其他','8')">其他<span class="badge">{{sportsNum[8]}}</span></div>
                </div>
                <div class="close-wrap"><button class="close" @click="closeChooseBox"></button></div>
            </div>
        </div>

    </div>    
</template>

<script>
    import sportsTop from '../../components/sportsTop'
    import joinSports from './joinSports'
    import createSports from './createSports'
    import bottomBar from '../../components/bottomBar'  
    import store from '../../store/index'  

    export default {
        data() {
            return {               
                isSelect: false,
                isChooseBox: false,
                sportsType: '篮球',
                lists:[],
                sportsNum: []
            }
        },
        methods: {
            
            show(data) {
                this.isSelect = data;
                console.log(data);                
            },
            chooseType() {
                this.isChooseBox = true;
            },
            check(typeText,type) {
                this.sportsType = typeText;
                this.isChooseBox = false;
                
                
            },
            closeChooseBox() {
                this.isChooseBox = false;
            }
            
        },
        computed: {
            isCreate() {
                return this.$route.path == '/sports' ? true : false;
            }, 
            btnText() {
                return this.$route.path == '/sports' ? 'Join In' : 'Create';
            } 
            
        },
        components: {
            sportsTop,createSports,bottomBar,joinSports
        },
        mounted() {
             var _this = this;

            //http://www.littlegray.xin:8801
            this.$http
            .get("http://www.littlegray.xin:8801/api/waiting_list",{
                params: {
                    type: 'football'
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
        }
    }
</script>

<style scoped>
.panel {
    width: 100vw;
    height: 65vh;
    overflow-y: hidden;
    overflow-x: scroll;
    box-sizing: border-box;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.4);
    z-index: 999;
}
.choose-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40vw;
    margin-top: -30vh;
    width: 80vw;
    /* height: 60vh; */
    box-sizing: border-box;
    background-color: rgb(248,248,248);
    z-index: 1000;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 8px #666;
    font-size: 14px;
    
}
.choose-box .text {    
    color: #8C9895;
    margin-bottom: 20px;
}
.choose-box .content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
.choose-box .a-box {
    flex: 1 0 24%;
    color: #666;
    background-color: #fff;
    border: 1px solid #999;
    /* padding: 8px 24px; */
    display: inline-block;
    border-radius: 2px;
    margin: 0 10px 20px 10px;
    /* width: 90px; */
    height: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(76,98,252);
    
}
.choose-box .a-box .badge {
    font-size: 12px;
    line-height: 40px;
    color: #666;
    margin-left: 3px;  
}
.choose-box .a-box.active {
    border: 1px solid rgb(76,98,252);
    color: rgb(76,98,252);
}
.choose-box .close-wrap {
    text-align: center;
}
.choose-box .close-wrap .close {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background: #666;
    border: none;
}
.choose-box .close-wrap .close::before {
    content: '×';
    font-size: 22px;
    color: #fff;
}
.slide-fade-enter-active {
  transition: all .3s ease;
  overflow: hidden;
}
.slide-fade-leave-active {
  transition: all .3s ease;
  overflow: hidden;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  /* transform: translateX(10px); */
  opacity: 0;
  overflow: hidden;
}


</style>