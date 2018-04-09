<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.href">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="" class="slide-img">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import '../assets/styles/swiper.css'

export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false,
                }
            },
        },
        items: {
            type: Array,
            default() {
                return [{src: '/static/slide-1.jpg'},{src: '/static/slide-2.jpg'},{src: '/static/slide-3.jpg'}]
            },
        },
    },
}
</script>

<style lang="css">
  /* @import "~swiper/dist/css/swiper.css"; */
  .slide-img {
      width: 100vw;
      height: 220px;
  }
</style>
