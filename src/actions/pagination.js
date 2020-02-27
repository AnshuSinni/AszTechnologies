export const CURRENT_PAGE_NUMBER = 'CURRENT_PAGE_NUMBER';
export const PAGE_NUMBERS = 'PAGE_NUMBERS';

export const currentPageNumber = (currentPage) => {
    return {
        type: CURRENT_PAGE_NUMBER,
        payload:currentPage
    }
}

export const pageNumbers = () => {
    return {
        type: PAGE_NUMBERS
    }
}