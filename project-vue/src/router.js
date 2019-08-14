import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './components/Login.vue'
import Listview from './views/listview.vue'
import Addshopview from './views/addshopview.vue'
import Home from './views/home'
import Souye from './views/Tabbar/souye'

//新品推荐
import New from './views/Tabbar/new'
Vue.use(Router)

export default new Router({
  routes: [{
      name: "home",
      path: "/home",
      component: Home,
      children: [{
          name: 'Souye',
          // 第二层路由的path是没有/
          path: 'souye',
          component: Souye,
        },
        {
          name: 'New',
          // 第二层路由的path是没有/
          path: 'new',
          component: New,
        },{
          name:'listshop',
          path: 'listshop',
          component: Listview,
        }, {
          name:'addshop',
          path: 'addshop',
          component: Addshopview,
        }, {
          //订单列表页router  orderlist订单列表
          path: 'OL',
          name: 'OL',
          component: () => import( /* webpackChunkName: "about" */ './views/orderList.vue') //懒加载的形式，需要到的时候才加载
        }, {
          //发货页面router    ordersForShipment订单发货
          path: 'OFS/:id',
          name: 'OFS',
          component: () => import( /* webpackChunkName: "about" */ './views/ordersForShipment.vue') //懒加载的形式，需要到的时候才加载
        }, {
          //订单详情router orderDetails
          path: 'OD/:id',
          name: 'OD',
          component: () => import( /* webpackChunkName: "about" */ './views/orderDetails.vue') //懒加载的形式，需要到的时候才加载
        }, {
          //订单详情router returnApplication申请退货页面
          path: 'RA',
          name: 'RA',
          component: () => import( /* webpackChunkName: "about" */ './views/returnApplication.vue') //懒加载的形式，需要到的时候才加载
        }, {
          //订单详情router returnApplicationDetails申请退货详情页
          path: 'RAD',
          name: 'RAD',
          component: () => import( /* webpackChunkName: "about" */ './views/returnApplicationDetails.vue') //懒加载的形式，需要到的时候才加载
        }
      ]
    },
    {
      name:'login',
      path: '/login',
      component: Login
    },  {
      path: '/',
      redirect: '/login'
    }, {
      //注册路由sign in
      path: '/signin',
      name: 'signin',
      component: () => import( /* webpackChunkName: "about" */ './views/signIn.vue') //懒加载的形式，需要到的时候才加载
    },
  ]
})
// const router = new VueRouter({
//   routes
// })

// export default router