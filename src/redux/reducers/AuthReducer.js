
import { LOGIN , SIGN_UP , LOGOUT } from "../type/Type";

let initialState = {
    error: '',
    users: []
}

function AuthReducer(state = initialState, action) {

    switch (action.type) {

        case SIGN_UP:
            console.log("Data in Reducer SIGN_UP: ", action.payload);
            let newusers = state.users;
            newusers.push(action.payload)

            return {
                ...state,
                users: newusers,
            }
        default:
            return state;
    }
}

export default AuthReducer;