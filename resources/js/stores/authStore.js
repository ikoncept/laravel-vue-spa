import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null
    }),
    getters: {
        verified (state) {
            if (state.user) return state.user.email_verified_at

            return null
        },
        id (state) {
            if (state.user) return state.user.id

            return null
        }
    },
    actions: {
        async login (payload) {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/auth/login', payload)

            return this.whoami()
        },

        async logout () {
            await axios.post('/auth/logout')

            this.setUser(null)
        },

        async whoami() {
            try {
                const { data } = await axios.get('/whoami')

                this.user = data.data

                return this.user
            } catch (err) {
                console.error(err)

                return null
            }
        }
    }
})
