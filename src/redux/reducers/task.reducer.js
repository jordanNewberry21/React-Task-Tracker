const tasks = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default tasks;