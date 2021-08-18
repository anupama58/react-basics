import React from "react"
import TodoList from "./TodoList";
import Header from "./Header"
class TodoContainer extends React.Component {

    state = {
        todos: [
            {
            id: 1,
            title: "What is React",
            completed: true
            },
            {
            id: 2,
            title: "Virtual DOM",
            completed: false
            },
            {
            id: 3,
            title: "React hello world app (Please push to GitHub)",
            completed: false
            },
            {
              id:4,
              title: "State and Props",
              completed: false
            },
            {
              id:5,
              title: "Component and different type of components",
              completed: false
            }
        ]
    };
  render() {
    return (
        // <ul>
        //     {this.state.todos.map(todo => (
        //         <li>{todo.title}</li>
        //     ))}
        // </ul>
        <div>
            <Header />
            <TodoList todos={this.state.todos} />
        </div>
    )
  }
}
export default TodoContainer