const tasks = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL':
            return action.payload;
        default:
            return state;
    }
}

export default tasks;