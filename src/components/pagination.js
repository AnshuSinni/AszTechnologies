import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Pagination() {
    const dispatch = useDispatch();

    const pageNumbers = useSelector(state => state.paginationReducer.pageNumbers);
    let currentPage = useSelector(state => state.paginationReducer.currentPage);

    const previusPage = (() => {
        for (var i = 0; i < pageNumbers.length; i++) {
            if (currentPage - 1 === pageNumbers[i]) {
                dispatch({
                    type: 'CURRENT_PAGE_NUMBER',
                    payload: currentPage - 1
                })

            }
        }

    })

    const nextPage = (() => {
        for (var i = 0; i < pageNumbers.length; i++) {
            if (currentPage + 1 === pageNumbers[i]) {
                dispatch({
                    type: 'CURRENT_PAGE_NUMBER',
                    payload: currentPage + 1
                })
            }
        }

    })

    return (
        <>
            <li className={currentPage === 1 ? "prev disabled" : "prev"}  onClick={previusPage} >Prev</li>
            <li className="page-number">{currentPage}</li>
            <li className={currentPage > pageNumbers.length ? "next" : "next disabled"} onClick={nextPage}>Next</li>
        </>
    )
}

export default Pagination;
