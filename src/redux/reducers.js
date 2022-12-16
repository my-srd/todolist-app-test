import { ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM, UPDATE_CHECKBOX_TODO_ITEM } from "./action";

const initialState = {
    todo: [{ id: 1, todo: 'test', completed: true }]
};

const todolist = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return { todo: [...state.todo, action.payload] };
        case DELETE_TODO_ITEM:
            const delTodo = state.todo.filter(
                (item) => item.id !== action.payload
            )
            return { todo: delTodo };

        case UPDATE_TODO_ITEM:
            let dataupdate = action.payload;
            const updateTodo =
                state.todo.map((item) => {
                    if (item.id === dataupdate.id) {
                        // item.id = dataupdate.id;
                        // item.todo = dataupdate.todo;
                        // item.completed = dataupdate.completed;
                        return { ...state.todo, todo: dataupdate.todo };
                    }
                    return item
                    // updateTodo.push(item)
                })
            return { ...state.todo, todo: updateTodo };


        case UPDATE_CHECKBOX_TODO_ITEM:
            let datacheckbox = action.payload;
            const updatecheckboxTodo =
                state.todo.map((item) =>

                    item.id === datacheckbox.id ? { ...datacheckbox, completed: !datacheckbox.completed } : item
                    // return item
                    // updatecheckboxTodo.push(item)
                )

            //   return {todo: updatecheckboxTodo};
            return { ...state.todo, todo: updatecheckboxTodo };
        default:
            return state;
    }
};

export default todolist;
