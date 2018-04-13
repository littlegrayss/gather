<template>

    <div class="sports-list">
        <span class="sponsor-avatar">
            <div class="avatar-wrap">
                <img :src="list.avatar" alt="">
            </div>
        </span>
        <span class="sports-details">
            <div>{{list.site}}</div>
            <div>{{list.time}}</div>
        </span>
        <span class="sports-people">
            <div>{{list.waitingPeople}}</div>
            <div>缺少人数</div>
        </span>
    </div>
    

</template>

<script>
export default {
    props: ['list'],
    methods: {
       
    }
};
</script>

<style scoped>
.sports-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    /*center*/
    height: 11vh;
    width: 100vw;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 10px;
    box-sizing: border-box;
    z-index: 999;
}
.list-actived {
    border: 2px solid #2B95FF;
    box-shadow: 0 1px 8px rgba(43,149,255,.8);
}
.sponsor-avatar {
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
    align-items: center;  
}
.avatar-wrap {
    width: 7vh;
    height: 7vh;
    border-radius: 3.5vh;
    background-color: transparent;
    overflow: hidden;
}
.avatar-wrap img {
    width: 7vh;
    height: 7vh;
}
.sports-details {
    flex: 1;
    text-align: left;
    margin-left: 12px;
    /* background-color: blueviolet */
}
.sports-details div:first-of-type,.sports-people div:first-of-type {
    color: #333;
    font-weight: 700;
}
.sports-details div:first-of-type {
    color: #4e4e4e;
}
.sports-details div:last-of-type, .sports-people div:last-of-type {
    color: #666;
    font-size: 12px;
}
.sports-people {
    flex: 0 0 20%;
    text-align: center;
    /* background-color: brown; */
}
</style>