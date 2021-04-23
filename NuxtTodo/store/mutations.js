import Vue from 'vue'

export default {
    addTodo(state , payload){
        state.todos.push(payload)
        // alert(payload)
    },
    removeTodo(state,payload){
        this.$delete(state.todos, payload)
    }
}