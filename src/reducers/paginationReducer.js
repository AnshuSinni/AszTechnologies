import initialState from '../initialData';

export default (state = initialState, action) => {
    switch (action.type) {

        case "CURRENT_PAGE_NUMBER":
            return {
                ...state,
                currentPage: action.payload
            }

        case "PAGE_NUMBERS":
            for (let i = 1; i <= Math.ceil(action.payload / state.resourcesPerPage); i++) {
                state.pageNumbers.push(i);
            }
            console.log(state.pageNumbers)

            return {
                ...state,
                pageNumbers: state.pageNumbers
            }

        default:
            return state;
    }
}