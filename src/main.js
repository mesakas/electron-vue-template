import Vue from 'vue'
import App from './App.vue'

// 你可以在任何vue组件中，通过window.ipcRenderer的方式访问ipcRenderer中的内容
const { ipcRenderer } = window.require('electron');
window.ipcRenderer = ipcRenderer


// 简单的消息传送测试
// window.ipcRenderer.on('mainMsg', (event, msg) => {
//   console.log(msg);
// })
// window.ipcRenderer.send('msg', 'this is a message')




Vue.config.productionTip = false

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')