import React, { Component } from 'react'

import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {getTodos,deleteTodo} from '../redux/actions/actions'
import Todo from './Todo';

 class Todos extends Component {
    componentDidMount(){
      console.log("repete")
       this.props.getTodos()
    }
    handleDeleteTodo=(id)=>{

      this.props.deleteTodo(id)
    }
    shouldComponentUpdate(prevProps,prevState,snapchot){
      if(prevProps && this.props.todos!=prevProps.todos){
        console.log('repet didupdate');
        return true
      }
    }
  render() {
    let todos = (this.props.todos);
    
    return (
      <div>
        {todos.length>0?<Todo todos={todos} handleDeleteTodo ={this.handleDeleteTodo}/>:<h1>There is no thing todo</h1>}
      </div>
    )
  }
}

Todos.propTypes={
  getTodoAction:PropTypes.func.isRequired,
  todos:PropTypes.array.isRequired
}

let mapStateToProps = state=>{
    return {
        todos:state.todoReducer.todos

    }
}

export default connect( mapStateToProps,{getTodos,deleteTodo})(Todos)