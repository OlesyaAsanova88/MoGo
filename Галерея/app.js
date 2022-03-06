const App = {
   data() {
      return {
         counter: 0,
         isElBox: false
      }
   },

   methods: {
      toggleElement() {
         this.isElBox = !this.isElBox
      }
   }

}

Vue.createApp(App).mount('#app')