import { defineClientConfig } from '@vuepress/client'
import zoom from './components/zoom.vue'
// import {compilerOptions} from '@vue/compiler-dom'

// compilerOptions = {isCustomElement: (tag)=>['cover'].includes(tag)}

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.config.compilerOptions.isCustomElement = (tag)=>['cover'].includes(tag)
  },
  setup() {},
  rootComponents: [zoom],
  layouts: {
  },
})