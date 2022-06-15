import { createRouter as createVueRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'

// The middleware for every page of the application.
const middlewareFiles = import.meta.globEager('@/router/middleware/**/*.js')
const middlewares = Object.keys(middlewareFiles).map(file => {
    return {
        name: file.split('/').pop().replace(/(^.\/)|(\.js$)/g, ''),
        callback: middlewareFiles[file].default
    }
})

export default (app) => {
    const router = createVueRouter({
        history: createWebHistory(),
        routes
    })

    router.beforeResolve((to, from, next) => {
        window.$logger.info('Route', to.name)

        if (!to.meta.middleware) {
            next()
        }

        let middleware = to.meta.middleware

        if (!Array.isArray(middleware)) {
            middleware = [middleware]
        }

        const routeMiddleware = middleware.map(key => {
            return middlewares.find(middleware => middleware.name === key)?.callback
        })

        // Call each middleware.
        callMiddleware(routeMiddleware, to, from, (...args) => {
            next(...args)
        })
    })

    return router
}

/**
 * Call each middleware.
 *
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
function callMiddleware (middlewares, to, from, next) {
    const stack = middlewares.reverse()

    const _next = (...args) => {
        // Stop if "_next" was called with an argument or the stack is empty.
        if (args.length > 0 || stack.length === 0) {
            return next(...args)
        }

        const middleware = stack.pop()

        if (typeof middleware === 'function') {
            middleware(to, from, _next)
        } else {
            console.error(`Undefined middleware [${middleware}]`)
        }
    }

    _next()
}
