<template>
    <div class="flex flex-col min-h-screen ">
        <div class="absolute flex p-4 text-sm font-semibold tracking-widest text-gray-500 uppercase top-1 right-1">
            <div v-if="user">
                <RouterLink
                    class="px-6 "
                    :to="{ name: 'home' }"
                >
                    Home
                </RouterLink>
                <button
                    class="px-6"
                    @click="logout()"
                >
                    Logout
                </button>
            </div>
            <div v-else />
        </div>

        <div class="h-full">
            <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-indigo-700 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                    <div class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div class="lg:self-center">
                            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                                <span class="block">Laravel 8 + Vue 3 SPA</span>
                                <span class="block text-2xl">Shave several minutes of your next project.</span>
                            </h2>
                            <p class="mt-4 text-lg leading-6 text-indigo-200">
                                Don't let creativity bleed by wasting time on scaffolding and other boring things. Get started right away!
                            </p>

                            <RouterLink
                                class="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow hover:bg-indigo-50"
                                :to="{ name: 'login' }"
                            >
                                Login
                            </RouterLink>
                        </div>
                    </div>
                    <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img
                            class="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
                            src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                            alt="App screenshot"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthStore } from '@/stores/authStore.js'

export default {
    data () {
        return {
            auth: true
        }
    },

    computed: {
        ...mapState(useAuthStore, ['user']),
        user () {
            return this.user
        }
    },

    methods: {
        logout () {
            this.$store.dispatch('auth/logout')
        }
    }
}
</script>
