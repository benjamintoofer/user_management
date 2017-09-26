import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as Actions from './actions/UserActions'

import TitleBar from './components/TitleBar'
import UserTableContainer from './containers/UserTableContainer'

const openUpdateModal = (e)=>{
    console.log("OPEN!!");
    console.log(e);
}

function  App(props) {
    console.log(props);
    return (
        <div className="App">
            <TitleBar />
            <UserTableContainer listOfUsers={props.Users} openUpdateModalHandler={openUpdateModal}/>
        </div>
    );
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
