import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './components/Login.vue'
import Listview from './views/listview.vue'
import Addshopview from './views/addshopview.vue'
Vue.use(Router)

export default new Router({
  routes: [
{
  path: '/login',
  component: Login
}, {
  path: '/listshop',
  component: Listview,
}, {
  path: '/addshop',
  component: Addshopview,
}, {
  path: '/',
  redirect: '/login'
}
    {
      //注册路由sign in
      path : '/signin',
      name : 'signin',
      component: () => import( /* webpackChunkName: "about" */ './views/signIn.vue') //懒加载的形式，需要到的时候才加载
    },

    {
      //订单列表页router  orderlist订单列表
      path: '/OL',
      name: 'OL',
      component: () => import( /* webpackChunkName: "about" */ './views/orderList.vue') //懒加载的形式，需要到的时候才加载
    },

    {
      //发货页面router    ordersForShipment订单发货
      path: '/OFS/:id',
      name: 'OFS',
      component: () => import( /* webpackChunkName: "about" */ './views/ordersForShipment.vue') //懒加载的形式，需要到的时候才加载
    },

    {
      //订单详情router orderDetails
      path: '/OD/:id',
      name: 'OD',
      component: () => import( /* webpackChunkName: "about" */ './views/orderDetails.vue') //懒加载的形式，需要到的时候才加载
    },

    {
      //订单详情router returnApplication申请退货页面
      path: '/RA',
      name: 'RA',
      component: () => import( /* webpackChunkName: "about" */ './views/returnApplication.vue') //懒加载的形式，需要到的时候才加载
    },

    {
      //订单详情router returnApplicationDetails申请退货详情页
      path: '/RAD',
      name: 'RAD',
      component: () => import( /* webpackChunkName: "about" */ './views/returnApplicationDetails.vue') //懒加载的形式，需要到的时候才加载
    }
  ]
})