import React, { Component } from 'react';
import addNewTodo from "../actions/addNewTodo";


class AddTodo extends Component {

    render() {
        return (
            <div>
                <label> Add a New Todo: </label> <br />
                <form>
                    <input type="text" ref="newTodo"/>

                    {// onClick preventing default and calling addNewTodo action
                    // with the input value, grabbed through refs
                    }
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        addNewTodo(this.refs.newTodo.value)}
                    }>
                        Add
                    </button>
                </form>
            </div>
        )
    }

}


export default AddTodo;