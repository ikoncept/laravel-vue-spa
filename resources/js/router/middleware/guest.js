import store from '@/store'

export default async (to, from, next) => {
    console.log('guest')
    if (store.getters['auth/user']) {
        next({ name: 'home' })
    } else {
        next()
    }
}
