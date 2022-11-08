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

  test("Update Todo, ", () => {
    let todo_service_for_update = new todoservice();
    expect(
      todo_service.update_todo("subhash 1", {
        Title: "subi 1",
        Description: "Hoping to this be the updated",
        despair: false,
      })
    ).not.toEqual(todo_service_for_update.get_todos().todo[0]);
  });

  test("Deleting any Todo after the parameter", () => {
    let todo_service_for_delete = new todoservice();

    expect(todo_service.delete_todo(2)).not.toEqual(
      todo_service_for_delete.get_todos().todo
    );

    expect(todo_service.delete_todo(1)[1]).toBeUndefined();
  });

});
