class todoservice {
    todo_data = {
      todo: [
        {
          title: "subhash 1",
          description: "D1",
          done: false,
        },
        {
          title: "subhash 2",
          description: "D2",
          done: false,
        },
        {
          title: "subhash 3",
          description: "D3",
          done: false,
        },
      ],
    };
    constructor() {
      this.todos = this.todo_data;
    }
  
    get_todos() {
      return this.todos;
    }
  
    add_todo(todo) {
      this.todos.todo.push(todo);
      return todo;
    }
  
    update_todo(id, todo) {
        for (var i = 0; i < this.todos.todo.length; i++) {
          if (this.todos.todo[i].title == id) {
            this.todos.todo[i] = todo;
            return this.todos.todo[i];
          }
        }
      }

      delete_todo(id) {
        this.todos.todo.splice(id, this.todos.todo.length - 1);
        return this.todos.todo;
      }
  }
  
  module.exports = todoservice;
  