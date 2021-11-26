import axios from 'axios'
export const state = () => ({
    user: null
})

export const getters = {
    user (state) {
        return state.user
    },
    verified (state) {
        if (state.user) return state.user.email_verified_at
        return null
    },
    id (state) {
        if (state.user) return state.user.id
        return null
    }
}

export const mutations = {
    setUser (state, payload) {
        state.user = payload
    }
}

export const actions = {
    async login ({ dispatch }, payload) {
        await axios.get('/sanctum/csrf-cookie')

        await axios.post('/auth/login', payload)

        return dispatch('getUser')
    },

    async logout ({ commit }) {
        await axios.post('/auth/logout')

        commit('setUser', null)
    },

    async getUser ({ commit }) {
        try {
            const { data } = await axios.get('/whoami')

            commit('setUser', data.data)
        } catch (err) {
            console.error(err)
        }
    }
}
