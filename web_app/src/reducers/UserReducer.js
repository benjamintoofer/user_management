import {ADD_USER,
        OPEN_AND_CLOSE_MODAL,
        UPDATE_MODAL_FIELDS,
        UPDATE_BUTTON_STATE} from '../actions/UserActions'

const userReducer = (state = {}, action)=> {

    switch (action.type) {
        case ADD_USER:
            console.log('Add User');
            return {
                ...state
            }
        case OPEN_AND_CLOSE_MODAL:
            let openFirst, openLast, openAddress = null
            if(action.userInfo != null){
                openFirst = action.userInfo.first
                openLast = action.userInfo.last
                openAddress = action.userInfo.address
            }

            return {
                ...state,
                modalType: action.modalType,
                modalFirstName: openFirst,
                modalLastName: openLast,
                modalAddress: openAddress,
                modalIsOpen: action.isOpen
            }

        case UPDATE_MODAL_FIELDS:
            let value = action.value
            let key = null
            switch (action.field) {
                case 'firstName':
                    key='modalFirstName'
                    break;
                case 'lastName':
                    key='modalLastName'
                    break;
                case 'address':
                    key='modalAddress'
                    break;
            }
            return {
                ...state,
                [key]: value
            }

        case UPDATE_BUTTON_STATE:
            return state
        default:
            return state
    }
}


export default userReducer
