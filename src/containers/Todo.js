import React from 'react';
import {toggleToDo} from '../actions';
import { connect } from 'react-redux';


function Todo({id, text, completed, toggleToDo}) {
  return (
    <li
      className={`Todo ${completed ? 'completed' : ''}`} 
      onClick={() => toggleToDo(id)}
      style={{border: "1px solid red"}}
    >
      {text}
    </li>
  )
}

const matchDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch( toggleToDo(id) )
})

export default connect(null, matchDispatchToProps)(Todo);