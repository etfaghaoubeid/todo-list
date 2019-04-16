import React from 'react'
import {Link} from 'react-router-dom'

export default function Todo({handleDeleteTodo,todos}) {
  return (
    <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description </th>
          <th scope="col">isDone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map(todo=>(
            <tr>
            <th scope="row">{todo.title}</th>
            <td>{todo.description}</td>
            <td>  <input type="checkbox" value={todo.isDone} checked={todo.isDone}/></td>
            <td><button className="btn btn-danger mx-1 my-1" onClick={()=>handleDeleteTodo(todo._id)}><i class="fas fa-trash-alt"></i></button>
            <Link to = {`/editTodo/${todo._id}`} className="btn btn-info mx-1 my-1"> <i class="fas fa-edit"></i> </Link>
            </td>
          </tr>

        ))
        }

      </tbody>
    </table>    
  )
}
