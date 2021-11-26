<template>
    <div class="w-full bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Login
            </h3>

            <form class="flex flex-col mt-5" @submit.prevent="login">
                <div class="w-full py-2 my-1 sm:flex sm:items-center sm:justify-between">
                    <label
                        for="Email"
                        class="w-4/12 "
                    > Email </label>
                    <input
                        v-model="email"
                        type="email"
                        name="email"
                        class="w-full p-2 mt-3 bg-white border border-gray-300 rounded-sm sm:w-8/12 sm:mt-0 focus:outline-none"
                    >
                </div>
                <div class="w-full py-2 my-1 sm:flex sm:items-center sm:justify-between">
                    <label
                        for="Password"
                        class="w-4/12 "
                    > Password </label>
                    <input
                        v-model="password"
                        type="password"
                        name="password"
                        class="w-full p-2 mt-3 bg-white border border-gray-300 rounded-sm sm:w-8/12 sm:mt-0 focus:outline-none "
                    >
                </div>
                <div class="text-right">
                    <PrimaryButton type="submit" class="whitespace-nowrap">
                        Login
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton'

export default {
    components: {
        PrimaryButton
    },

    layout: 'basic',

    data () {
        return {

            email: '',
            password: '',
            errors: null,
            busy: false

        }
    },

    methods: {
        async login () {
            this.busy = true
            this.errors = null
            try {
                await this.$store.dispatch('auth/login', { email: this.email, password: this.password })

                this.$router.push({ name: 'home' })
            } catch (e) {
                this.errors = e.data
            };
            this.busy = false
        }
    }

}
</script>
