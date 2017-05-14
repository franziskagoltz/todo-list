// reducers for todos to be stored in redux store

const todos = (state=null, action) => {
    switch (action.type) {

        case "ADD_TODO":
            return {
                text: action.payload,
                id: action.id,
                completed: false
            }
    }

    return state

 }

 export default todos;