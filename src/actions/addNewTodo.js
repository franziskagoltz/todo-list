// click event handling user adding a new todo

let todoId = 0

const addNewTodo = (newTodoText) => {

    // logging value to be sent as payload
    console.log("you added a new todo: ", newTodoText)

    return {
        type: "ADD_TODO",
        payload: newTodoText,
        id: todoId++
    }
}

export default addNewTodo;