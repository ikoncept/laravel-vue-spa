<template>
    <button :type="type" class="inline-flex items-center justify-center w-full px-4 py-2 mt-3 font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'PrimaryButton',

    props: {
        type: {
            type: String,
            default: 'button'
        }
    }
}
</script>
