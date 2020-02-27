export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const ADD_USER = 'ADD_USER';
export const CLOSE_NEW_USER_MODAL = "CLOSE_NEW_USER_MODAL";

export const DELETE_USER = 'DELETE_USER';

export const EDIT_USER = 'EDIT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CLOSE_EDIT_USER_MODAL = 'CLOSE_EDIT_USER_MODAL'

export const createUser = () => {
    return {
        type: CREATE_NEW_USER
    }
};

export const addUser = () => {
    return {
        type: ADD_USER,
        payload: user
    }
};

export const closeNewUserModal = () => {
    return {
        type: CLOSE_NEW_USER_MODAL
    }
}

export const closeEditUserModal = () => {
    return {
        type: CLOSE_EDIT_USER_MODAL
    }
}

export const editUser = () => {
    return {
        type: EDIT_USER,
        payload: userToEdit
    }
}

export const updateUser = () => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER,
        payload: id
    }
}