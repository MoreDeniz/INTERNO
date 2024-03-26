import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/blog*',
            name: 'Blog*',
            component: BlogPage
        },
        {
            path: '/blog/:pageNumber?',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/project*',
            name: 'Project',
            component: ProjectPage
        },

        {
            path: "/blog_details",
            name: "blog_details",
            component: BlogDetailsPage,
        },
        {
            path: "/project_details",
            name: "project_details",
            component: ProjectDetailsPage,
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        },
    ]
})