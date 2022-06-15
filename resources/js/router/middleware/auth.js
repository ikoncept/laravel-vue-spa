import { useAuthStore } from '@/stores/authStore'

export default async (to, from, next) => {
    const store = useAuthStore()
    const user = store.user ?? await store.whoami()

    if (!user) {
        next({ name: 'login' })
    } else {
        next()
    }
}
