const dataUpdateReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_SUCCESS':
            return {
                ...state,
                data: action.payload,
            };
        case 'UPDATE_FAILURE':
            return {
                ...state
            };
        default:
            throw new Error();
    }
};
export default dataUpdateReducer;