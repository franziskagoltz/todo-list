import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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


let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addNewTodo: addNewTodo}, dispatch);
}

let mapStateToProps = (state) => {
    return {
        todos: state.testTodos
    };
}


AddTodo = connect(mapDispatchToProps, mapStateToProps)(AddTodo)

export default AddTodo;