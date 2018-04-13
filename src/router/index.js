
import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import login from'../pages/login'
import register from'../pages/register'

import index from '../pages/index/index'
import home from '../pages/index/home'
import circle from '../pages/index/circle'
import reservation from '../pages/index/reservation'


import sports from '../pages/sports/sports'
import joinSports from '../pages/sports/joinSports'
import createSports from '../pages/sports/createSports'

import partTime from '../pages/partTime'
import coachDetails from '../pages/coachDetails'

import site from '../pages/site'
import sportsShop from '../pages/sportsShop'
import game from '../pages/game'

import profile from'../pages/index/profile/profile'
import info from'../pages/index/profile/info'
import help from'../pages/index/profile/help'
import settings from'../pages/index/profile/settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: '',
          redirect: '/index'
        },
        {
          path: '/index',
          component: index,
          children:[
            {
              path:'',
              redirect: '/home'
              // component: home
            },
            {
              path:'/home',
              component: home
            },
            {
              path: '/reservation',
              component: reservation
            },
            {
              path:'/circle',
              component: circle
            },
            {
              path: '/profile',
              component: profile,
            },
            
          ]
        },
        {
          path: '/login', //登录
          component: login
        },
        {
          path: '/register', //注册
          component: register
        },
        {
          path: '/sports',
          component: sports,
          children: [
            {
              path: '',
              component: joinSports,
            },
            {
              path: 'joinSports',
              component: joinSports,
            },
            {
              path: 'createSports',
              component: createSports,
            },
          ]
        },
        {
          path: '/circle',
          component: circle
        },
        {
          path: '/reservation',
          component: reservation
        },        
        {
          path: '/game',
          component: game
        },        
        {
          path: '/partTime',
          component: partTime
        },        
        {
          path: '/coachDetails',
          component: coachDetails
        },        
        {
          path: '/site',
          component: site
        },        
        {
          path: '/sportsShop',
          component: sportsShop
        },        
        {
          path: '/info', //个人信息详情页
          component: info,
        },
        {
          path: '/help', //帮助与反馈
          component: help
        },
        {
          path: '/settings', //设置
          component: settings,
        }
        
      ]
    }
  ]
})
