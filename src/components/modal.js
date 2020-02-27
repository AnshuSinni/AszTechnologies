import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';

function ModalDialog() {
    const dispatch = useDispatch();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [action, setAction] = React.useState('');
    const [dateAdded, setDateAdded] = React.useState('');

    //user
    const users = useSelector(state => state.userReducer.users);
    const showModal = useSelector(state => state.userReducer.showModal);
    const addUser = useSelector(state => state.userReducer.create);
    const userToEdit = useSelector(state => state.userReducer.userToEdit);
    const editUser = useSelector(state => state.userReducer.edit);
    const modalType = useSelector(state => state.userReducer.modalType);

    //todo
    const todos = useSelector(state => state.todoReducer.users);
    const showTodoModal = useSelector(state => state.todoReducer.showModal);
    const addTodo = useSelector(state => state.todoReducer.create);
    const todoToEdit = useSelector(state => state.todoReducer.todoToEdit);
    const editTodo = useSelector(state => state.todoReducer.edit);
    const modalTodoType = useSelector(state => state.todoReducer.modalType);

    //loading
    const loading = useSelector(state => state.loadingReducer.loading);

    React.useEffect(() => {
        if (editUser) {
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        } else {
            setName('');
            setEmail('');
        }
    }, [userToEdit]);

    React.useEffect(() => {
        if (editTodo) {
            setAction(todoToEdit.action);
            setDateAdded(todoToEdit.dateAdded);
        } else {
            setAction('');
            setDateAdded('');
        }
    }, [todoToEdit]);


    const handleSaveModalClose = (() => {
        dispatch({
            type: 'CLOSE_NEW_USER_MODAL',
        });
        dispatch({
            type: 'CLOSE_NEW_TODO_MODAL',
        });
    });

    const handleEditModalClose = (() => {
        dispatch({
            type: 'CLOSE_EDIT_USER_MODAL',
        });

        dispatch({
            type: 'CLOSE_EDIT_TODO_MODAL',
        });
    });

    const onChangeName = ((e) => {
        let name = e.target.value;
        setName(name);
    });

    const onChangeEmail = ((e) => {
        let email = e.target.value;
        setEmail(email);
    });

    const onChangeAction = ((e) => {
        let action = e.target.value;
        setAction(action);
    })

    const onChangeDate = ((e) => {
        let date = e.target.value;
        setDateAdded(date);
    })

    const handleSave = (async (e) => {
        dispatch({
            type: 'LOADING',
            payload: true
        })

        async function wait(duration = 1000) {
            let p = new Promise(resolve => {
                setTimeout(() => {
                    dispatch({
                        type: 'LOADING',
                        payload: false
                    })
                    resolve();
                }, duration);
            });
            return p;
        }

        await wait(2000);

        if (addUser) {
            if (name.length > 0 && email.length > 0) {
                dispatch({
                    type: 'ADD_USER',
                    payload: {
                        id: users.length,
                        name: name,
                        email: email
                    }
                });

                dispatch({
                    type: 'CLOSE_NEW_USER_MODAL'
                });
            }
        }

        if (addTodo) {
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    id: todos.length,
                    action: action,
                    dateAdded: dateAdded
                }
            });

            dispatch({
                type: 'CLOSE_NEW_TODO_MODAL'
            });
        }
    })

    const handleUpdate = (async() => {
        dispatch({
            type: 'LOADING',
            payload: true
        })

        async function wait(duration = 1000) {
            let p = new Promise(resolve => {
                setTimeout(() => {
                    dispatch({
                        type: 'LOADING',
                        payload: false
                    })
                    resolve();
                }, duration);
            });
            return p;
        }

        await wait(2000);

        if (editUser) {
            if (name.length > 0 && email.length > 0) {
                dispatch({
                    type: 'UPDATE_USER',
                    payload: {
                        id: userToEdit.id,
                        name: name,
                        email: email
                    }
                });
            }
            dispatch({
                type: 'CLOSE_EDIT_USER_MODAL'
            });
        }

        if (editTodo) {
            dispatch({
                type: 'UPDATE_TODO',
                payload: {
                    id: todoToEdit.id,
                    action: action,
                    dateAdded: dateAdded
                }
            });

            dispatch({
                type: 'CLOSE_EDIT_TODO_MODAL'
            });
        }
    })

    return (
        <Modal
            title={modalType ? modalType : modalTodoType}
            visible={showModal ? showModal : showTodoModal}
            onOk={editUser || editTodo ? handleUpdate : handleSave}
            confirmLoading={loading}
            onCancel={editUser || editTodo ? handleEditModalClose : handleSaveModalClose}
        >
            {
                addUser || editUser ?
                    <form>
                        <div className="input">
                            <span>Name :</span> <input type="text" name="name" value={name} onChange={onChangeName} required></input>
                        </div>
                        <div className="input">
                            <span>Email : </span> <input type="email" name="email" value={email} onChange={onChangeEmail} required></input>
                        </div>
                    </form> :
                    <form>
                        <div className="input">
                            <span>Action :</span> <input type="text" name="action" value={action} onChange={onChangeAction} required></input>
                        </div>
                        <div className="input">
                            <span>Date : </span> <input type="date" name="date" value={dateAdded} onChange={onChangeDate} required></input>
                        </div>
                    </form>
            }
        </Modal>
    )
}

export default ModalDialog;