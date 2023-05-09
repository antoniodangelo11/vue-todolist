const app = Vue.createApp({
    data() {
      return {
        newTodo: '',
        inputError: false,
        todos: [
            {
                text: "Fare la spesa",
                done: false,
            },
            {
                text: "Portare Jimmy a scuola",
                done: true,
            },
            {
                text: "Andare al mare",
                done: false,
            },
            {
                text: "Comprare l'orologio",
                done: true,
            },
            {
                text: "Chiamare il medico",
                done: false,
            },
        ],
      };
    },
    methods: {
        addTodo() {
            let cleanedTodo = this.newTodo.trim();
            if (cleanedTodo.length > 4 != '') {
                this.todos.unshift(cleanedTodo);
                this.newTodo = '';
                this.inputError = false;
            } else {
                this.inputError = true;
            }
        },

        deleteItem(index) {
            this.todos.splice(index, 1);
        }
    },
});
  
  // Spazio lasciato di proposito
  
  app.mount("#app");