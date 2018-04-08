<template>
        <div class="coach-list">
            
            <div class="list-top">
                <span class="avatar">
                    <div class="avatar-wrap">
                        <img :src="coach.avatar" alt="">
                    </div>                    
                </span>
                <div class="details">
                        <div>{{coach.name}}</div>
                        <div>{{coach.goodAt}}</div>
                </div>                
            </div>
            
            <div class="follows">
                <div class="follows-avatar">
                    <span class="s-avatar">
                        <img src="../../static/avatar-1.jpg" alt="">
                    </span>
                    <span class="s-avatar brother-avatar">
                        <img src="../../static/avatar-2.jpg" alt="">
                    </span>
                    <span class="s-avatar brother-avatar">
                        <img src="../../static/avatar-3.jpg" alt="">
                    </span>...                    
                </div>
                <span class="follows-text">
                    <span>{{coach.follows}}</span>人点赞
                </span>
            </div>
        </div>
</template>

<script>
    
    export default {
        props: ['coach'],
        components: {
            
        }
    }
</script>

<style scoped>
.coach-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 17vh;
    border-radius: 2px;
    box-shadow: 0 1px 6px rgba(158,158,158,.4);
    margin-top: 10px;
}
.list-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    /* flex: 0 0 70%; */
    /* background: darkviolet; */
}
.follows {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* flex: 0 0 30%; */
    
    /* background: darkturquoise; */
}
.follows-avatar {
    flex: 0 0 32%;
    text-align: center
}
.follows-text {
    font-size: 10px;
    color: #999;
}
.avatar {
    flex: 0 0 32%;
    display: flex;
    justify-content: center;
    align-items: center;  
}
.avatar-wrap {
    width: 9vh;
    height: 9vh;
    border-radius: 4.5vh;
    background-color: transparent;
    overflow: hidden;
}
.avatar-wrap img {
    width: 9vh;
    height: 9vh;
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
    text-align: left;
    flex: 1;
    font-size: 14px;
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
</style>