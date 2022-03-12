// React Import 
import React from "react";
// Other files Import
import TodoItem from "./TodoItem";
import Header from "./Header"

// Todo list component
class TodoList extends React.Component {
    //Dictionary having todos items
    state = {
        todos: [
          {
            id: 1,
            title: "Milestone 1",
            completed: true
          },
          {
            id: 2,
            title: "Milestone 2",
            completed: false
          },
          {
            id: 3,
            title: "Milestone 3",
            completed: false
          }
        ]
       };
    render(){
        return(
          <>
              {/* Including Header */}
          <Header/>
          <ul>
        {/* Iterating through Map(Dictionary) */}
        
        {this.state.todos.map(todo => (
            // Calling TodoItem component and sending props todos
            <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      </>

            )
    }
}
// Exporting
export default TodoList;