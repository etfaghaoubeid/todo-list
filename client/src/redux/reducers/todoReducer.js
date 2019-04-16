import {UPDATE_TODO ,DELETE_TODO ,CREATE_TODO, GET_TODO_SUCCESS,GET_TODO} from '../actions/actionTypes'
let initState = {
   todos:[],
   todo:{}
}
export function todoReducer(state = initState,action){
   switch(action.type){
       case GET_TODO_SUCCESS:
       return {
           ...state,
          todos:action.payload
       }
       case CREATE_TODO:
       return {
          ...state,
          todos:[...state.todos,action.todo]
       }
       case DELETE_TODO:
       return{
          ...state,
          todos:[...state.todos]
       }
       case UPDATE_TODO:
       return{
          ...state,
          todos:[...state.todos,action.todo]
       }
       case GET_TODO:
       return{
          ...state,
          todo:action.payload

       }
       default:
         return state;
   }
}