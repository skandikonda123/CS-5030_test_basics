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
  
  }
  
  module.exports = todoservice;
  