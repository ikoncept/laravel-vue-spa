<template>
    <div class="flex items-center justify-center w-full h-full">
        <div class="w-1/4">
            <Child />
        </div>
    </div>
</template>

<script>

import Child from '@/components/Child'

export default {
    name: 'Default',

    components: {
        Child
    },

    methods: {
    }
}
</script>
