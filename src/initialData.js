const initialState = {
    showModal: false,
    modalType: '',
    create: false,
    edit: false,

    loading: false,

    users: [
        {
            "id": 0,
            "name": "Anshu",
            "email": "anshu@gmail.com"
        },
        {
            "id": 1,
            "name": "Divya",
            "email": "divya@gmail.com"
        },
        {
            "id": 2,
            "name": "Sundar",
            "email": "sundar@gmail.com"
        }
    ],

    todos: [
        {
            "id": 0,
            "action": "Finish the task",
            "dateAdded": "2020-02-25"
        },
        {
            "id": 1,
            "action": "Finish cleaning",
            "dateAdded": "2020-02-22"
        }, {
            "id": 2,
            "action": "Finish washing",
            "dateAdded": "2020-01-23"
        }
    ],

    currentPage: 1,
    resourcesPerPage: 2,
    pageNumbers: []
};

export default initialState;