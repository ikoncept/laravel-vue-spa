<template>
    <div class="w-full bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Reset password for {{ email }}
            </h3>

            <form class="flex flex-col mt-5" @submit.prevent="reset">
                <div class="w-full py-2 my-1 sm:flex sm:items-center sm:justify-between">
                    <label for="Password" class="w-4/12 "> Password </label>
                    <input
                        v-model="password"
                        type="password"
                        name="password"
                        class="w-full p-2 mt-3 bg-white border border-gray-300 rounded-sm sm:w-8/12 sm:mt-0 focus:outline-none"
                    >
                </div>
                <div class="w-full py-2 my-1 sm:flex sm:items-center sm:justify-between">
                    <label for="Password confirm" class="w-4/12 "> Confirm Password </label>
                    <input
                        v-model="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        class="w-full p-2 mt-3 bg-white border border-gray-300 rounded-sm sm:w-8/12 sm:mt-0 focus:outline-none"
                    >
                </div>
                <div class="text-right">
                    <PrimaryButton type="submit" class="whitespace-nowrap">
                        Send reset link
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton'
import axios from 'axios'

export default {
    components: {
        PrimaryButton
    },

    layout: 'basic',

    props: {
        token: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            password: '',
            password_confirmation: '',
            errors: null,
            success: ''
        }
    },

    methods: {
        async reset () {
            this.busy = true
            this.errors = null
            this.success = ''

            await axios.post('/api/reset-password', {
                email: this.email,
                token: this.token,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
                .then((res) => {
                    this.success = res.data.msg + ' redirecting ...'
                    setTimeout(() => {
                        this.$router.push({ name: 'login' })
                    }, 1000)
                })
                .catch((err) => {
                    this.errors = err.response.data
                })
            this.busy = false
        }
    }

}
</script>
