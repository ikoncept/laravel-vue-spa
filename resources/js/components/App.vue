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
import { mapGetters, mapState } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

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
        this.setLayout('default')
    },

    methods: {
        getLayouts(){

            const layoutFiles = import.meta.globEager('@/layouts/**/*.vue')

            const layouts = Object.keys(layoutFiles)
                .map(key => [key.split('/').pop().replace(/(^.\/)|(\.vue$)/g, ''), layoutFiles[key]])
                .reduce((components, [name, component]) => {
                    components[name] = component.default

                    return components
                }, {})

            return layouts
        },

        /**
       * Set the application layout.
       *
       * @param {String} layout
       */
        setLayout (layout) {
            const layouts = this.getLayouts()

            if (!layout || !layouts[layout]) {
                layout = this.defaultLayout
            }

            this.$logger.info('App', `Setting layout to ${layout}`)

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
