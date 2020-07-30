const repos = (state = [], action) => {
    switch(action.type){
        case "SAVE_REPOS":
            return action.payload;

        default:
            return state;
    }
}

export default repos;
