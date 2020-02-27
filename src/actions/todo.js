export const CREATE_NEW_TODO = 'CREATE_NEW_TODO';
export const ADD_TODO = 'ADD_TODO';
export const CLOSE_NEW_TODO_MODAL = "CLOSE_NEW_TODO_MODAL";

export const DELETE_TODO = 'DELETE_TODO';

export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const CLOSE_EDIT_TODO_MODAL = 'CLOSE_EDIT_TODO_MODAL';

export const createTodo = () => {
    return {
        type: CREATE_NEW_TODO
    }
};

export const addTodo = () => {
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const closeNewTodoModal = () => {
    return {
        type: CLOSE_NEW_TODO_MODAL
    }
}

export const closeEditTodoModal = () => {
    return {
        type: CLOSE_EDIT_TODO_MODAL
    }
}

export const editTodo = () => {
    return {
        type: EDIT_TODO,
        payload: todoToEdit
    }
}

export const updateTodo = () => {
    return {
        type: UPDATE_TODO,
        payload: todo
    }
}

export const deleteTodo = () => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}