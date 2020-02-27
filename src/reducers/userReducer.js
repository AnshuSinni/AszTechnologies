import initialState from '../initialData';

export default (state = initialState, action) => {
  switch (action.type) {

    case "CREATE_NEW_USER":
      return {
        ...state,
        showModal: true,
        create: true,
        modalType: 'CREATE USER'
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case "CLOSE_NEW_USER_MODAL":
      return {
        ...state,
        showModal: false,
        create: false
      }

    case "EDIT_USER":
      return {
        ...state,
        showModal: true,
        edit: true,
        modalType: 'EDIT USER',
        userToEdit: action.userToEdit
      }

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id !== action.payload.id) {
            return user;
          } else {
            return { ...user, name: action.payload.name, email: action.payload.email };
          }
        })
      }

    case "CLOSE_EDIT_USER_MODAL":
      return {
        ...state,
        showModal: false,
        edit: false,
        userToEdit: ''
      }

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }

    default:
      return state;
  }
};