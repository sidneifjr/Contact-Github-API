const user = (state = false, action) => {
    switch(action.type){
        case "SAVE_USER":
            return action.payload;

        default:
            return state;
    }
}

export default user;
