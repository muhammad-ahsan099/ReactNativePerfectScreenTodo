
import { LOGIN, SIGN_UP, LOGOUT } from "../type/Type";

let initialState = {
    error: '',
    isUserLoggedIn: false ,
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

        case LOGIN: {
            // if user login than what?
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
            };
        }


        default:
            return state;
    }
}

export default AuthReducer;