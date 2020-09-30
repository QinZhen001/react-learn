interface Person {
  readonly id: number
  name: string
  age?: number
}

let viking: Person = {
  id: 12312,
  name: "viking"
}



interface Point {
  name: string,
  agr?: number,
  [propName: string]: any
}


// ----------------------------------------
//  Partial

interface Todo {
  title: string
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate
  }
}

const todo1: Todo = {
  title: "Learn Ts",
  description: "description"
}

const todo2 = updateTodo(todo1, {
  description: "asdads"
})

















