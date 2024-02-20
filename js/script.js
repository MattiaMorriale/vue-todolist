
    
const { createApp } = Vue

createApp({
    data() {
        return {
            
            newTodo: '',

            todo: [
                {
                text: 'fare la cacca è bello',
                done: false,
                },
            ]
            

        }
    },
    methods: {
        deleteTodo(todoindex) {

            this.todo.splice(todoindex, 1);

        },
        addTodo() {

            this.todo.push({text: this.newTodo, done: false});

            this.newTodo = '';

        },
        todoTextslashed(todo) {

            if (todo.done == true) {

                todo.done = false;

            } else {

                todo.done = true;

            }

        }
    },
}).mount('#app')
