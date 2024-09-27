import './assets/main.css'

// createApp 是 Vue 3 提供的一个方法，用于创建一个新的 Vue 应用实例。
import { createApp } from 'vue'

// Vue 项目通常使用 .vue 文件来定义单文件组件（SFC）
// App 是从 App.vue 文件中导出的默认内容。
// 通常，App.vue 文件定义了一个 Vue 组件，使用 export default 导出组件对象。
// 因此，在其他文件中可以用 import App 的方式导入这个组件。
// 在这个例子中，App.vue 是应用的根组件，
// 使用 import 导入后，通过 createApp(App) 将其渲染到页面的指定元素上（通常是带有 id="app" 的元素）。
import App from './App.vue'


//添加vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
  })

//添加router
import router from "./router"

// 在 Vue 3 中，你需要使用 createApp 函数来启动 Vue 应用程序。
// 它负责初始化应用，并将应用挂载到 DOM 中的某个元素上。
createApp(App).use(router).use(vuetify).mount('#app') ;




// ES6 模块 vs CommonJS 模块
// CommonJS 使用 require() 导入，module.exports 导出（通常在 Node.js 中使用）。
// ES6 模块 使用 import 和 export。
// CommonJS 是 JavaScript 的一个模块化规范，最初设计是为了在 Node.js 环境下使用。
// Node.js 是 JavaScript 的服务器端运行时，最早采用了 CommonJS 作为其模块化系统，解决了模块依赖和代码组织的问题。

// JS文件需要被导出才能被其他js文件识别
// vue文件可能因为其特殊性，可自动识别，不需要写export语句