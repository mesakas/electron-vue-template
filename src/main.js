import Vue from 'vue'
import App from './App.vue'

//you can use window.ipcRenderer any vue component.
const {
  ipcRenderer
} = window.require('electron');
window.ipcRenderer = ipcRenderer

//test
window.ipcRenderer.on('mainMsg', (event, msg)=>{
  console.log(msg);
})
window.ipcRenderer.send('msg', 'this is a message')

Vue.config.productionTip = false

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')