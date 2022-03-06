const App = {
   data() {
      return{
         counter: 0,
         title: 'Счетчик'
      }
   }
}

Vue.createApp(App).mount('#app')

// или

//const app = Vue.createApp(App)

//app.mount('#app')

