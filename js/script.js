// alert("Hello world");

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      'Todo Uno',
      'Todo Due',
      'Todo Tre',
      'Todo Quattro'
    ],
    todosDelete: []
  },
  methods: {
    addTodo() {
      if (this.newTodo.length < 4) {
        alert('Inserisci una cosa dare con più di 3 caratteri');
      } else {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      }
    },
    deleteTodo(index) {
      this.todosDelete.push(this.todos[index]);
      alert('Hai eliminato il ToDo : ' + this.todos[index]);
      this.todos.splice(index, 1);
    },
    restoreTodo(index) {
      this.todos.push(this.todosDelete[index]);
      this.todosDelete.splice(index, 1);
    }
  }
});





// console.log();
