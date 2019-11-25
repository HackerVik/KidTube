const videoreducer = (state, action) => {
    switch (action.type) {
        case 'initialdata':
            return [...action.data];
        default:
            return state;
    }
};
export default videoreducer;