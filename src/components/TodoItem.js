// import { render } from '@testing-library/react'
import React from 'react'

// Class (Components) based Component

// class TodoItem extends React.Component {
//   render(){
//     return (
//         <li>{this.props.todo.title}</li>
//   )}
// }

// Function based Components
// No render() in functional components
function TodoItem(props) {
    
      return <li>{props.todo.title}</li>
    
  }
// Exporting
export default TodoItem;