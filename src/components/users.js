import React from 'react';
import Modal from './modal';
import Pagination from './pagination';
import { useSelector, useDispatch } from 'react-redux';

function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users);

    const currentPage = useSelector(state => state.paginationReducer.currentPage);
    const resourcesPerPage = useSelector(state => state.paginationReducer.resourcesPerPage);

    const indexOfLastUser = currentPage * resourcesPerPage;
    const indexOfFirstUser = indexOfLastUser - resourcesPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    React.useEffect(() => {
        dispatch({
            type: 'PAGE_NUMBERS',
            payload: users.length
        })
    }, [])


    const createUser = (() => {
        dispatch({
            type: 'CREATE_NEW_USER'
        })
    });

    const editUser = React.useCallback((user) => {
        dispatch({
            type: 'EDIT_USER',
            userToEdit: user
        })
    }, [dispatch]);

    const deleteUser = React.useCallback((id) => {
        dispatch({
            type: 'DELETE_USER',
            payload: id

        })
    }, [dispatch])

    return (
        <>
            <button type="button" className="creatButton" onClick={createUser} >Create User</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>
                                    <span className="edit" onClick={() => editUser(user)} >Edit</span>
                                    <span className="delete" onClick={() => deleteUser(user.id)}>Delete</span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <ul className="page-numbers">
                <Pagination />
            </ul>

            <Modal />
        </>
    );
}

export default Users;
