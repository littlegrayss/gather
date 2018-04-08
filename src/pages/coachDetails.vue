<template>
    <div class="coach-details">
        <span class="iconfont icon-back" @click="$router.go(-1)"></span>
        <div class="top-bg"></div>
        <div class="top">
            <span class="avatar">
                <span>1</span>
                    <div class="avatar-wrap">
                        <img :src="coach.avatar" alt="">
                    </div>                    
                <span>2</span>
            </span>
        </div>
         <div class="details">
            <div>{{coach.name}}</div>
            <div>{{coach.goodAt}}</div>
        </div>
        <div class="follows">
            <span class="follows-avatar">
                <span class="s-avatar">
                    <img src="../../static/avatar-1.jpg" alt="">
                </span>
                <span class="s-avatar brother-avatar">
                    <img src="../../static/avatar-2.jpg" alt="">
                </span>
                <span class="s-avatar brother-avatar">
                    <img src="../../static/avatar-3.jpg" alt="">
                </span>...                    
            </span>
            <span class="follows-text">
                <span>{{coach.follows}}</span>人点赞
            </span>            
        </div>

        <div class="btn">预约</div>

        <div class="data">
            <span class="box">
                <div class="box-num">351</div>
                <div class="box-text">fedch</div>
            </span>
            <span class="line"></span>
            <span class="box">
                <div class="box-num">351</div>
                <div class="box-text">fedch</div>
            </span>
            <span class="line"></span>
            <span class="box">
                <div class="box-num">351</div>
                <div class="box-text">fedch</div>
            </span>
        </div>

        <div class="about">
            <h5>About</h5>
            <p>{{coach.about}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                coach: {
                    avatar: '/static/avatar-1.jpg',
                    name: '古天乐',
                    goodAt: '@跑步 @篮球',
                    follows: '6',
                    about: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                }
            }
        }
    }
</script>

<style scoped>
.coach-details {
    text-align: center;
    height: 100vh;
    /* overflow-y: scroll; */
    overflow: hidden;
    padding: 0 22px
}
.icon-back {
    color: #fff;
    position: absolute;
    top: 14px;
    left: 12px;
    font-weight: bolder;
}
.top-bg {
    width: 100vw;
    height: 26vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: lemonchiffon;
}
.top {
    margin-top: 18vh;
}
.avatar {
    flex: 0 0 32%;
    display: flex;
    justify-content: space-around;
    align-items: center;  
}
.avatar-wrap {
    width: 12vh;
    height: 12vh;
    border-radius: 6vh;
    background-color: transparent;
    overflow: hidden;
    border: 6px solid #fff
}
.avatar-wrap img {
    width: 12vh;
    height: 12vh;
    border-radius: 6vh;
}
.s-avatar {
    width: 3vh;
    height: 3vh;
    border-radius: 1.5vh;
    background-color: transparent;
    overflow: hidden;
    
}
.brother-avatar {
    margin-left: -1vh;
}
.s-avatar img {
    width: 3vh;
    height: 3vh;
    border-radius: 1.5vh;
}
.details {
    /* background-color: #fff; */
    /* text-align: left; */
    /* flex: 1; */
    margin-top: 4vh;
    font-size: 18px;
}
.details div:first-of-type {
    font-weight: bold;
    color: #333;
}
.details div:last-of-type {    
    margin-top: 4px;
    color: #666;
    font-size: 12px;
}
.follows {
    margin-top: 4vh;
}
.btn {
    /* background-color:  */
    box-sizing: border-box;
    border: 1px solid rgba(43,140,255,.8);
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    border-radius: 2px;
    background-color: rgba(43,140,255,.8);
    color: #fff;
    width: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px
}
.data {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    height: 11vh;
    border-radius: 2px;
    box-shadow: 0 1px 6px rgba(158,158,158,.4);
    margin-top: 14px;
}
.data .box {
    flex: 0 0 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.data .box .box-num {
    color: #666;
    font-weight: bold;
    font-size: 16px;
}
.data .box .box-text {
    margin-top: 2px;
    color: #999;
    font-size: 12px;
}
.data .line {
    height: 100%;
    width: 1px;
    background: rgba(158,158,158,.3);
}
.about {
    text-align: left;
    /* padding: 6px 22px; */
    color: #666
}
.about p {
    width: 100%;
    color: #999;
    white-space:normal;
    word-wrap:break-word;
}
</style>