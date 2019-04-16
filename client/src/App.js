import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Main from './components/layouts/Main';
import Todos from './components/Todos';

import {Route } from 'react-router-dom'
import EditTodo from './components/EditTodo';


class App extends Component {
  
  render() {
    return (
      <React.Fragment>
         <Main>
           <Route exact path='/' component= {Todos}/>
           <Route path='/createTodo' component= {AddTodo}/>
           <Route path= '/editTodo/:id' component={EditTodo}/>
         </Main>
      </React.Fragment>
    );
  }
}

export default App;
