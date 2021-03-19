import React from 'react';
import Todo from './Todo'
import {connect} from 'react-redux';

const ToDoList = ({todos}) => {

  const displayTodos = todoList => {
    return todoList.map(todo => {
      return (
        <Todo {...todo} key={todo.id} />
      )
    })
  }

  const handleClick = event => {
    event.preventDefault()

    switch (event.currentTarget.id) {
      case "active":
        displayTodos(todos.filter(todos => !todos.completed))
        break;
      case "completed":
        displayTodos(todos.filter(todos => todos.completed))
        break;
      default:
        displayTodos(todos)
    }
  }

  return (
    <>
      <button id="all" onClick={handleClick}>Show All</button> 
      <button id="active" onClick={handleClick}>Show Active</button>
      <button id="completed" onClick={handleClick}>Show Completed</button>
      <ul>
        {displayTodos(todos)}
      </ul>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});


export default connect(mapStateToProps)(ToDoList);