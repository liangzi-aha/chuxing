import Vue from 'vue'
import Router from 'vue-router'

//pc端
import NavUccn from '@/components/NavUccn'
import Slideshow from '@/components/Slideshow'
import xiaoBeiTrip from '@/components/xiaoBeiTrip'
import downloadAPP from '@/components/downloadAPP'
import AboutUs from '@/components/AboutUs'
import channelCooperation from '@/components/channelCooperation'
import NewsInquiry from '@/components/NewsInquiry'

//移动端
import FootMove from '@/components/FootMove'
import HomePage from '@/components/HomePage'
import NavMove from '@/components/NavMove'
import SlideshowOne from '@/components/SlideshowOne'
import xiaobeiTripMove from '@/components/xiaobeiTripMove'


Vue.use(Router)

export default new Router({
  // mode: 'history',

  routes: [
    {
      path: '/',
      redirect: '/pc_index'
    },
    {
      path: '/pc_index',
      name: 'NavUccn',
      component: NavUccn,
      redirect:'/Slideshow',
      children:[
        {
          path: '/Slideshow',
          name: 'Slideshow',
          component: Slideshow,
        },
        {
          path: '/xiaoBeiTrip',
          name: 'xiaoBeiTrip',
          component: xiaoBeiTrip,
        },
        {
          path: '/downloadAPP',
          name: 'downloadAPP',
          component: downloadAPP,
        },
        {
          path: '/AboutUs',
          name: 'AboutUs',
          component: AboutUs,
        },
        {
          path: '/channelCooperation',
          name: 'channelCooperation',
          component: channelCooperation,
        },
      ]
    },
    {
      path: '/NewsInquiry',
      name: 'NewsInquiry',
      component: NewsInquiry,
    },
    {
      path: '/m_index',
      name: 'NavMove',
      component: NavMove,
      redirect: '/HomePage',
      children:[
        {
          path: '/HomePage',
          name: 'HomePage',
          component: HomePage,
        },
      ]
    },
    {
      path: '/xiaobeiTripMove',
      name: 'xiaobeiTripMove',
      component: xiaobeiTripMove,
    }
  ]
})
