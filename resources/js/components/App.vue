<template>
    <Transition
        name="page"
        mode="out-in"
    >
        <Component
            :is="layout"
            v-if="layout"
        />
    </Transition>
</template>

<script>
import { markRaw } from 'vue'

const requireContext = require.context('@/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
    .map(file =>
        [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
    )
    .reduce((components, [name, component]) => {
        components[name] = component.default || component
        return components
    }, {})

export default {
    el: '#app',

    metaInfo () {
        const { appName } = window.config

        return {
            title: appName,
            titleTemplate: `%s · ${appName}`
        }
    },

    data: () => ({
        layout: null,
        defaultLayout: 'default'
    }),

    watch: {
        $route (to) {
            const layout = to.matched[0].components?.default?.layout

            this.setLayout(layout)
        }
    },

    mounted () {
        this.$logger.success(window.config.appName, 'App says hi!')
    },

    methods: {
        /**
       * Set the application layout.
       *
       * @param {String} layout
       */
        setLayout (layout) {
            console.log(layout)
            if (!layout || !layouts[layout]) {
                layout = this.defaultLayout
            }

            this.layout = markRaw(layouts[layout])
        }
    }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
