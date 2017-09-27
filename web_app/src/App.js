import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as Actions from './actions/UserActions'

import TitleBar from './components/TitleBar'
import UserTableContainer from './containers/UserTableContainer'
import UserModal from './components/UserModal'


function  App(props) {

    // console.log(props);
    const openUpdateUserModal = (index)=>{
        props.actions.OpenAndCloseModal(true, 'Update', props.Users[index])
    }

    const handleOnChange = (e)=>{
        const field = e.target.id
        props.actions.UpdateModalFields(field,e.target.value)
        console.log("HAPPENED AFTER!");
        console.log(props.modalFirstName);
        // props.actions.UpdateButtonState(props.modalType,)
    }
    const openAddUserModal = (e)=>{
        props.actions.OpenAndCloseModal(true, 'Add')
    }

    const closeAnyModalHandler = (e)=>{
        props.actions.OpenAndCloseModal(false)
    }

    const saveNewUser = (e)=>{
        props.actions.AddUser()
    }

    const openUserModal = props.modalIsOpen
    const modalType = props.modalType
    const modalFirstName = props.modalFirstName
    const modalLastName = props.modalLastName
    const modalAddress = props.modalAddress

    return (
        <div className="App">
            <TitleBar />
            <UserTableContainer listOfUsers={props.Users} openUpdateUserModalHandler={openUpdateUserModal} openAddUserModal={openAddUserModal}/>
            <UserModal modalFirstName={modalFirstName}
                        modalLastName={modalLastName}
                        modalAddress={modalAddress}
                        isOpen={openUserModal}
                        modalType={modalType}
                        closeHandler={closeAnyModalHandler}
                        handleOnChange={handleOnChange}
                        saveNewUser={saveNewUser}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
