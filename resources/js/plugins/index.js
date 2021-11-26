import FancyLog from '@ikoncept/fancylog'

export default function (app) {
    window.$logger = new FancyLog()
    app.config.globalProperties.$logger = new FancyLog()
}
