function page (path) {
    return () => import(/* webpackChunkName: 'view.' */ `@/views/${path}`).then(m => m.default || m)
}

export default [
    {
        path: '/',
        component: page('Welcome'),
        name: 'welcome',
        meta: {
            middleware: 'guest'
        }
    },
    {
        path: '/home',
        component: page('Home'),
        name: 'home',
        meta: {
            middleware: ['auth']
        }
    },
    {
        path: '/login',
        component: page('auth/Login'),
        name: 'login',
        meta: {
            middleware: 'guest'
        }
    },
    {
        path: '/reset-password/:token',
        component: page('auth/ResetPassword'),
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
        component: page('auth/ForgotPassword'),
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
