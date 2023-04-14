const { createApp } = Vue;

createApp({

  data(){

    return {
      tasks:[
        {
            text: "Task1",
            complete: false
        },
        {
            text: "Task2",
            complete: false
        },
        {
            text: "Task3",
            complete: false
        },
        {
            text: "Task4",
            complete: false
        },
      ]
    }
  }

}).mount('#app')