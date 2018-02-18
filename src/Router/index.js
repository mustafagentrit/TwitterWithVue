import Vue from 'vue'
import Router from 'vue-router'
import Tweets from '../components/Tweets'
import Login from '../components/Login'

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Tweets,

        },
        {
            path:'/login',
            component:Login,

        }
    ]
});
export default router;
