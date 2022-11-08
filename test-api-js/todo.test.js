var todoservice = require("./todo.service.js");
describe("todo test suite", () => {
  test("truth_value", () => {
    expect(true).toBe(true);
  });

  let todo_service = new todoservice();

  test("if service instance is created", () => {
    expect(todo_service instanceof todoservice).toBe(true);
  });

  // Initial length of the todo list is 3 // 3 default tasks
  test("get_todos", () => {
    expect(todo_service.get_todos().todo.length).toEqual(3);
  });

  test("Add Todo", () => {
    var extraTodo = {
      Name: "Subhash to-doing",
      Description: "Testing this object, to see if adds",
      confident: true,
    };

    expect(todo_service.add_todo(extraTodo)).toEqual(
      todo_service.get_todos().todo[todo_service.get_todos().todo.length - 1]
    );
  });

});
