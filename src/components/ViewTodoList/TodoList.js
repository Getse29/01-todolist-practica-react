import { TodoListItem } from "./TodoListItem"

export const TodoList = ({ newTodo }) => {
  return (
    <div className="col-6">
      <h2 className="text-center">Todo List</h2>

      <ul className="list-group">

        {
          newTodo.map(todo => (
            <TodoListItem
              key={todo.id}
              tarea={todo.tarea}
            />
          ))
        }
      </ul>
    </div>
  )
}
