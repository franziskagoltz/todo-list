import React, { Component } from 'react';


class AddTodo extends Component {

    render() {
        return (
            <div>
                <label> Add a New Todo: </label> <br />
                <input type="text" />
                <button type="submit">Add</button>
            </div>
        )
    }


}


export default AddTodo;