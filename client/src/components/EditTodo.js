import React, { Component } from 'react'
import {updateTodo,getTodo,getTodos} from '../redux/actions/actions'
import {connect } from 'react-redux'


class EditTodo extends Component {
  componentDidMount(){
    this.props.getTodo(this.props.match.params.id)
    let{title,description,isDone} = this.props.todo
     this.setState({title,description,isDone:isDone||false})
  }
       state = {
          title:'',
          description:'',
          isDone:null
      }
      handleIsDone=e=>{
        
        this.setState({...this.state,isDone:!this.state.isDone})
      }
      handleSubmite= (e)=>{
          e.preventDefault()
          let todo = {
            title:this.state.title,
            description: this.state.description,
            isDone:this.state.isDone
          }
          this.props.updateTodo(this.props.match.params.id,todo)  
          this.props.history.push("/");
          this.props.getTodos()

      }
      handleChange =(e) =>{
        this.setState({[e.target.name]:e.target.value})
        
      }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
<form onSubmit={this.handleSubmite} className="my-3">
        <div className="row">
          <div className="col-lg-3 my-1">
            <input type="text" name="title" className="form-control" placeholder="Todo Title" onChange={this.handleChange} value={this.state.title}/>
          </div>
          <div className="col-lg-6 my-1">
            <input type="text" name="description" className="form-control" placeholder="Todo description" onChange={this.handleChange} value ={this.state.description}/>
          </div>

          <div className="col-lg-1 my-1">
          <input type="checkbox" value={this.state.isDone} onChange={this.handleIsDone}  checked={this.state.isDone}/>
          </div>
          

          <div className="col-lg-2 my-1">
            <button type="submit" className="btn btn-primary mx-2">UPdate</button>
          </div>
        </div>
      </form>
         
      </React.Fragment>
    )
  }
}
const mapStateToProps = state=>{
  return {
    todo:state.todoReducer.todo
  }
}
export default  connect(mapStateToProps,{updateTodo,getTodo,getTodos})(EditTodo)
