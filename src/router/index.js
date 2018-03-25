import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Home',
      name: 'Home',
      component: Home
    },
    {
    	path:'/Home',
    	component: Home
    },
    {
    	path:'/Contact',
    	component: Contact
    },
    {
    	path:'/About',
    	component: About
    },
    {
    	path:'/Projects',
    	component: Projects
    },
    {
    	path:'/Work',
    	component: Work
    }
  ]
})
