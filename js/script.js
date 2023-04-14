const { createApp } = Vue;

createApp({

  data(){

    return {

        tasks:[
        {
            text: "Fare gli esercizi",
            complete: false
        },
        {
            text: "Andare a fare la spesa",
            complete: false
        },
        {
            text: "Cena con gli amici",
            complete: false
        },
        {
            text: "Comprare un vestito",
            complete: false
        },
    ],
    message: "",
    newTaskText: ""
    }
  }, 

  methods:{

    remouveTask(index){

        if(!this.tasks[index].complete){

            this.message = `Mi dispiace, devi completare prima la task per poterla eliminare`

            setTimeout(() => {
                this.message= ""
            }, 3000)

        } else {

            this.tasks.splice(index,1)
            this.message= "";
        }
    },

    addTask(){

        if(this.newTaskText.length < 4){
            this.message = `Mi dispiace, devi inserire un testo di almeno 5 caratteri`

            setTimeout(() => {
                this.message= ""
            }, 3000)

        } else {

            const newTask = {
                text: this.newTaskText,
                complete: false,
            }

            this.tasks.unshift(newTask)
            this.newTaskText= "";
        }
    }
  }

}).mount('#app')