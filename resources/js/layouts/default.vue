<template>
    <div>
        <Child />
    </div>
</template>

<script>

import Child from '@/components/LayoutChild.vue'

export default {
    name: 'DefaultLayout',

    components: {
        Child
    },

    methods: {
    }
}
</script>
