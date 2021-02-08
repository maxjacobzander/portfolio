export default (state = [], action) => {
    switch(action.type){
        case "SET_PROJECT":
            return [...action.payload]
        case "ADD_PROJECT":
            return [...state, action.payload]
        default:
            return state
    }
}