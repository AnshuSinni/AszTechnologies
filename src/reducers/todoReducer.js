import initialState from '../initialData';

export default (state = initialState, action) => {
    switch (action.type) {

        case "CREATE_NEW_TODO":
            return {
                ...state,
                showModal: true,
                create: true,
                modalType: 'CREATE TODO'
            };

        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case "CLOSE_NEW_TODO_MODAL":
            return {
                ...state,
                showModal: false,
                create: false
            }

        case "EDIT_TODO":
            return {
                ...state,
                showModal: true,
                edit: true,
                modalType: 'EDIT TODO',
                todoToEdit: action.todoToEdit
            }

        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload.id) {
                        return todo;
                    } else {
                        return { ...todo, action: action.payload.action, dateAdded: action.payload.dateAdded };
                    }
                })
            }

        case "CLOSE_EDIT_TODO_MODAL":
            return {
                ...state,
                showModal: false,
                edit: false,
                todoToEdit: ''
            }

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        default:
            return state;
    }
};