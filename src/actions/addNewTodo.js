// click event handling user adding a new todo

const addNewTodo = (newTodo) => {

    // logging value to be sent as payload
    console.log("you added a new todo: ", newTodo)

    return {
        type: "ADD_TODO",
        payload: newTodo
    }
}

export default addNewTodo;