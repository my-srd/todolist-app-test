export const ADD_TODO_ITEM ='ADD_TODO_ITEM';
export const DELETE_TODO_ITEM ='DELETE_TODO_ITEM';
export const UPDATE_TODO_ITEM ='UPDATE_TODO_ITEM';
export const UPDATE_CHECKBOX_TODO_ITEM ='UPDATE_CHECKBOX_TODO_ITEM';

export const addTodo = (payload) => {
    return({
        type: ADD_TODO_ITEM,
        payload:payload,
    })
}
export const deleteTodo = (payload) => {
    return({
        type: DELETE_TODO_ITEM,
        payload:payload,
    })
}

export const updateTodo = (payload) => {
    return({
        type: UPDATE_TODO_ITEM,
        payload:payload,
    })
}

export const updateCheckboxTodo = (payload) => {
    return({
        type: UPDATE_CHECKBOX_TODO_ITEM,
        payload:payload,
    })
}