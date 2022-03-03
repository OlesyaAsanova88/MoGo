const mycomponent = {
   data() {
      return {
         mytime: null,
         mydate: null
      }
   },
   methods: {

   }

}

const myapp = Vue.createApp(mycomponent).mount('#myapp')