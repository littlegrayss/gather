<template>
    <div>
        <head-top :title='title'></head-top>
        <div class="profile-bg"></div>
        <div class="avatar-wrap">
           
            <div class="avatar">
                 <img :src='avatar'>
            </div>

            <div class="username">凉瓜炒蛋</div>
        </div>
        <div class="data-box">
            <span class="box">
                <span class="big-num">0</span>
                <span class="discription">打卡天数</span>
            </span>
            <span class="box">
                <span class="big-num">0</span>
                <span class="discription">获得赞数</span>
            </span>
            <span class="box">
                <span class="big-num">0</span>
                <span class="discription">运动时数</span>
            </span>
        </div>
        <div class="lists">
            <list v-for="(li, index) in lists"
                  :key="index"
                  :list="li"
            ></list>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import list from '../../components/list'
    import headTop from '../../components/head'
    import foot from '../../components/foot'
    export default {
        data() {
            return {
                title: '个人中心',
                goBack: false,
                avatar: "./static/temp_avatar.jpg",
                lists: [{
                    index: 0,
                    icon: 'icon-info',
                    text: '个人资料',
                    url: './info'
                },
                {
                    index: 1,
                    icon: 'icon-help',
                    text: '帮助与反馈',
                    url: './help'
                },
                {
                    index: 0,
                    icon: 'icon-settings',
                    text: '设置',
                    url: './settings'
                },
                ]
            }
        },
        components: {
            headTop,foot,list
        }
    }
</script>

<style scoped>
.profile-bg {
    background-color: rgb(43,140,255);
	height:8.8rem;
	width: 100%;
	position: absolute;
	top: 3rem;
	z-index: -1;
}
.avatar {
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 2.6rem;
    position: absolute;
    top:3em;
    left:2rem;
    /* background: #fff; */
    box-shadow: inset 0 1rem 1.2rem rgb(43,140,255);
    z-index: 102;
    overflow: hidden;
}
.avatar img {
    width: 5.2rem;
    height: 5.2rem;
    z-index: 1;
}
.username {
    position: absolute;
    left: 8rem;
    top: 5.8rem;
    color: #eee
}
.data-box {
    height:6.8rem;
    width: 92vw;
    position: absolute;
    top: 7.8rem;
    left:50%;
    margin-left: -46vw;
    background: #fff;
    box-shadow:  0 .4rem 1.2rem #ddd;
    border-radius: .4rem;
    z-index: 103;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.lists {
    margin-top: 15.8rem;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
.big-num {
    font-size: 2.4rem;
    /* font-weight: bold; */
    color: rgb(43,140,255,.9);
    text-align: center;
    text-shadow: .1rem .2rem .2rem rgb(43,140,255,.6)
}
.discription {
    color: #999;
    font-weight: 600;
    margin-top: .6rem;
}
/*  */
</style>