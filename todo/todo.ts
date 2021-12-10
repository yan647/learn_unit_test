interface ITodo {
  description: string;
  done: boolean;
}

let todolist = [];

function addTodo(description: string): Array<ITodo> {
  todolist.push({
    description,
    done: false
  });
  return todolist;
}

function finishTodo(index: number): ITodo {
  todolist[index].done = true;
  return todolist[index];
}

function showUnfinishedTodos(): Array<ITodo> {
  return todolist.filter(todo => !todo.done);
}

function showAllTodos(): Array<ITodo> {
  return todolist;
}
