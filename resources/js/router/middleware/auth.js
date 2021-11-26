import store from '@/store'

export default async (to, from, next) => {
    console.log('auth')
    if (!store.getters['auth/user']) {
        next({ name: 'login' })
    } else {
        next()
    }
}
