import {CREATE_TODO, GET_TODO_SUCCESS,DELETE_TODO,UPDATE_TODO,GET_TODO} from './actionTypes'
import axios from 'axios'

export function getTodos(){
    return function(dispatch){ 
         axios.get('http://localhost:3001/api/')
         .then(res=>res.data)
         .then(todos=>dispatch({
            type:GET_TODO_SUCCESS,
            payload:todos.data
         }))
    }
}
export function createTodo(todo){
    console.log('coled');
    return function(dispatch){
        axios.post('http://localhost:3001/api/addTodo',todo)
        .then(res=>res.data)
        .then(res=>dispatch({
             type:CREATE_TODO,
             todo:res.data
        }))  
    }
}
export function deleteTodo(id){
    return function(dispatch){
        axios.delete(`http://localhost:3001/api/deleteTodo/${id}`)
        .then(res=>dispatch({
            type:DELETE_TODO
        }))

    }
}

export function updateTodo(id,todo){
    return function(dispatch){
        axios.put(`http://localhost:3001/api/updateTodo/${id}` ,todo)
        .then(res=>res.data)
        .then(updatedTodo=>dispatch({
            type:UPDATE_TODO,
            todo:updatedTodo.data

        }))
    }
}
export function getTodo(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/api/getTodo/${id}`)
        .then(res=>res.data)
        .then(todo=>dispatch({
            type:GET_TODO,
            payload:todo.data
        }))
    }
}

