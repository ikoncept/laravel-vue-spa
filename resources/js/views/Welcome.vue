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
            <div v-else>
                <RouterLink
                    class="px-6 "
                    :to="{ name: 'login' }"
                >
                    Login
                </RouterLink>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center flex-1 text-gray-600 ">
            <div class="mb-6 tracking-wider text-center text-8xl sm:mb-8 sm:text-8xl">
                Laravel Vue
            </div>

            <div class="text-sm font-normal text-teal-800 no-underline uppercase hover:underline" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            auth: true
        }
    },
    computed: {
        user () {
            return this.$store.getters['auth/user']
        }
    },
    methods: {
        logout () {
            this.$store.dispatch('auth/logout')
        }
    }
}
</script>
