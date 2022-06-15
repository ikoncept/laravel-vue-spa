import Welcome from '@/views/Welcome.vue'
import Home from '@/views/Home.vue'
import LoginPage from '@/views/auth/LoginPage.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'

export default [
    {
        path: '/',
        component: Welcome,
        name: 'welcome',
        meta: {
            middleware: 'guest'
        }
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            middleware: ['auth']
        }
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login',
        meta: {
            middleware: 'guest'
        }
    },
    {
        path: '/reset-password/:token',
        component: ResetPassword,
        props: route => ({
            token: route.params.token,
            email: route.query.email
        }),
        name: 'reset_password',
        meta: {
            middleware: 'guest'
        }
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'forgot_password',
        meta: {
            middleware: 'guest'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    }
]
