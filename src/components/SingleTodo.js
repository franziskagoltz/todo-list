import React, { Component } from 'react';


class SingleTodo extends Component {

    render() {
        return (
            <div>
              <input type="checkbox" onClick={this.props.onClick}
                style={{
                  textDecoration: this.props.completed ? 'line-through' : 'none'
              }}/>
                {this.props.text}

            </div>
        )
    }

}


export default SingleTodo;