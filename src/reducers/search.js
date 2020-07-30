const search = (state = '', action) => {
    switch(action.type){
        case "SAVE_USERNAME":
            return action.payload;

        default:
            return state;
    }
}

export default search;
