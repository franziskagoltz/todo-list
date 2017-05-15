import React, { Component } from 'react';
import SingleTodo from "./SingleTodo";


class TodoList extends Component {

    render () {
        return (
            <div>
            {this.props.todos? this.props.todos.map( todo => {
                return <SingleTodo key={todo.id} text={todo.payload}
                        completed={todo.completed} />
                }): "No Todo's to show"
            }
            </div>
        )
    }
    
}

export default TodoList;