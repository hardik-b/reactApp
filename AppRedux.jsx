import React, { Component } from 'react';
import {connect}  from 'react-redux';
import  addTodo  from './reduxUsage/actions/actions'

import AddTodo from './reduxUsage/components/AddTodo.js'
import TodoList from './reduxUsage/components/TodoList.js'

class AppRedux extends Component {
   render() {
      const { dispatch, visibleTodos } = this.props;
      
      return (
         <div>
            <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
            {/*<TodoList todos = {visibleTodos}/>*/}
         </div>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
export default connect(select)(AppRedux);
//export default AppRedux;