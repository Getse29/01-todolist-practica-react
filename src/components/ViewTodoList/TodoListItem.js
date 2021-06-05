import React from 'react'
import { Delete } from '../ButtonTodoList/Delete'
import { Edit } from '../ButtonTodoList/Edit'

export const TodoListItem = ({ tarea }) => {
  return (
    <li
      className="list-group-item"
    >
      <span className="alinear-texto">{tarea}</span>

      <div className="btn-group float-end">

        <Delete />
        <Edit />

      </div>
    </li>
  )
}
