import { createApp } from 'vue'
import { plugin as unleashPlugin, UnleashClient } from '@unleash/proxy-client-vue'
// import the root component App from a single-file component.
import App from './App.vue'

const config = {
  url: process.env.VUE_APP_UNLEASH_URL,
  clientKey: process.env.VUE_APP_UNLEASH_KEY,
  refreshInterval: 15,
  appName: 'SIDEBAR-V2',
}

const client = new UnleashClient(config)

const app = createApp(App)
app.use(unleashPlugin, { unleashClient: client })
app.mount('#app')