import React, { Component } from 'react'
import {connect } from 'react-redux'
import {createTodo} from '../redux/actions/actions'
 class AddTodo extends Component {
    state = {
        title:'',
        description:''
    }
    handleSubmite= (e)=>{
        e.preventDefault()
        let todo = {
          title:this.state.title,
          description: this.state.description
        }
        this.props.createTodo(todo)  
        this.props.history.push("/");

    }
    handleChange =(e) =>{
       this.setState({[e.target.name]:e.target.value})
      
    }
  render() {
    return (
        <form onSubmit={this.handleSubmite} className="my-3">
        <div className="row">
          <div className="col-lg-3 my-1">
            <input type="text" name="title" className="form-control" placeholder="Todo Title" onChange={this.handleChange} value={this.state.title}/>
          </div>
          <div className="col-lg-6 my-1">
            <input type="text" name="description" className="form-control" placeholder="Todo description" onChange={this.handleChange} value ={this.state.description}/>
          </div>
          <div className="col-lg- my-1">
            <button type="submit" className="btn btn-primary mx-2">Create</button>
          </div>
        </div>
      </form>
         
    )
  }
}



export default connect (null,{createTodo})(AddTodo);