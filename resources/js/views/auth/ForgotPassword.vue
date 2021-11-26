<template>
    <div class="w-full bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Forgot your password?
            </h3>
            <div class="max-w-xl mt-2 text-sm text-gray-500">
                <p>
                    Fill in your e-mail below to receive a link to reset your password.
                </p>
            </div>
            <form class="mt-5 sm:flex sm:items-center" @submit.prevent="send">
                <div class="w-full sm:max-w-xs">
                    <label for="email" class="sr-only">Email</label>
                    <input
                        id="email"
                        v-model="email"
                        type="email"
                        name="email"
                        class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="you@example.com"
                    >
                </div>
                <PrimaryButton type="submit" class="whitespace-nowrap">
                    Send reset link
                </PrimaryButton>
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

    data: () => ({
        email: ''
    }),

    methods: {
        async send () {
            this.errors = null
            this.success = ''
            await axios.post('/api/auth/forgot-password', { email: this.email })
        }
    }

}
</script>
