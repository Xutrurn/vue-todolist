// alert("Hello world");

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      'Cosa da fare Uno',
      'Cosa da fare Due',
      'Cosa da fare Tre',
      'Cosa da fare Quattro'
    ],
    todosDelete: [],
    index: null,
    edit: null
  },
  methods: {
    addTodo() {
      if (this.newTodo.length < 4) {
        alert('Inserisci una cosa da fare con più di 3 caratteri');
      } else {
        this.todos.push(this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1).toLowerCase());
        this.newTodo = '';
      }
    },
    deleteTodo(index) {
      this.todosDelete.push(this.todos[index]);
      // alert('Hai eliminato : ' + this.todos[index]);
      this.todos.splice(index, 1);
    },
    deleteTodoAll() {
      this.todos.forEach((element) => {
        this.todosDelete.push(element)
      });
      this.todos = [];
    },
    restoreTodo(index) {
      this.todos.push(this.todosDelete[index]);
      this.todosDelete.splice(index, 1);
    },
    deleteForeverOne(index) {
      this.todosDelete.splice(index, 1);
    },
    deleteForeverAll(index) {
      this.todosDelete.splice(0);
    },
    editTodo(index) {
      this.edit = prompt('Modifica cosa da fare');
      this.edit = this.edit.charAt(0).toUpperCase() + this.edit.substr(1).toLowerCase();
      this.todos.splice(index, 1, this.edit);
    }
  }
});





// console.log();
