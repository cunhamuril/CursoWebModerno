import Vue from 'vue'
import App from './App'

// Forma que o VueCli cria pra gente
new Vue({
    render: h => h(App)
}).$mount("#app")


// new Vue({
//     el: "#app",    
//     render(createElement) {
//         return createElement(App)
//     }
// })