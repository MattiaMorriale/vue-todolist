
    
const { createApp } = Vue

createApp({
    data() {
        return {
            
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
            this.todo.splice(todoindex, 1)
        }
    },
}).mount('#app')
