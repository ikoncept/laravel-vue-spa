import { useAuthStore } from '@/stores/authStore'

export default async (to, from, next) => {
    const store = useAuthStore()
    const user = store.user ?? await store.whoami()

    if (user) {
        window.$logger.warn('Auth', `${user.email} already authenticated, redirecting`)
        next({ name: 'home' })
    } else {
        next()
    }
}
