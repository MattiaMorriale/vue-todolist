
    
const { createApp } = Vue

createApp({
    data() {
        return {
            
            newTodo: '',

            todo: [
                {
                text: 'fare la cacca è bello',
                done: false,
                },{
                text: 'fare la cacca è bello',
                done: true,
                },{
                text: 'fare la cacca è bello',
                done: false,
                },{
                text: 'fare la cacca è bello',
                done: true,
                },{
                text: 'fare la cacca è bello',
                done: false,
                },{
                text: 'fare la cacca è bello',
                done: true,
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

        }
    },
}).mount('#app')
