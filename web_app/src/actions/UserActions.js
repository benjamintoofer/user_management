export const ADD_USER = 'ADD_USER'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const OPEN_AND_CLOSE_MODAL = 'OPEN_AND_CLOSE_MODAL'
export const UPDATE_MODAL_FIELDS = 'UPDATE_MODAL_FIELDS'
export const UPDATE_BUTTON_STATE = 'UPDATE_BUTTON_STATE'

export const AddUser = someInfo=>({
    type: ADD_USER,
    someInfo
})



export const OpenAndCloseModal = (isOpen, modalType=null, userInfo=null)=> ({
    type: OPEN_AND_CLOSE_MODAL,
    modalType,
    userInfo,
    isOpen
})

export const UpdateModalFields = (field,value)=> ({
    type: UPDATE_MODAL_FIELDS,
    field,
    value
})

export const UpdateButtonState = (button, modalFirstName, modalLastName, modalAddress) => ({
    type: UPDATE_BUTTON_STATE,
    button,
    modalFirstName,
    modalLastName,
    modalAddress
})
