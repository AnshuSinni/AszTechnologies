import React from 'react';
import Modal from './modal';
import Pagination from './pagination';
import { useSelector, useDispatch } from 'react-redux';

function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todoReducer.todos);

  const currentPage = useSelector(state => state.paginationReducer.currentPage);
    const resourcesPerPage = useSelector(state => state.paginationReducer.resourcesPerPage);

    const indexOfLastUser = currentPage * resourcesPerPage;
    const indexOfFirstUser = indexOfLastUser - resourcesPerPage;
    const currentTodos = todos.slice(indexOfFirstUser, indexOfLastUser);

    React.useEffect(() => {
        dispatch({
            type: 'PAGE_NUMBERS',
            payload: todos.length
        })
    }, [])

  const createTodo = (() => {
    dispatch({
      type: 'CREATE_NEW_TODO'
    })
  });

  const editTodo = React.useCallback((todo) => {
    dispatch({
      type: 'EDIT_TODO',
      todoToEdit: todo
    })
  }, [dispatch]);

  const deleteTodo = React.useCallback((id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id

    })
  }, [dispatch])

  return (
    <>
      <button type="button" className="creatButton" onClick={createTodo} >Create Todo</button>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTodos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.action}</td>
                <td>
                  <span className="edit" onClick={() => editTodo(todo)} >Edit</span>
                  <span className="delete" onClick={() => deleteTodo(todo.id)}>Delete</span>
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

export default Todo;
