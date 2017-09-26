import {ADD_USER, AddUser} from '../actions/UserActions'

const userReducer = (state = {}, action)=> {

    switch (action.type) {
        case ADD_USER:
            console.log('Add User');
            return {
                ...state
            }

        default:
            return state
    }
}


export default userReducer
