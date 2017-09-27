import React from 'react'

import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const styles = theme => ({
    root: {
        width: '100%',
    },
    row: {
        cursor: 'pointer'
    },
    buttonModalStyle: {
        margin: '2px 8px'
    },
    textfieldContainer: {
        display: 'flex',
        'flexDirection': 'column'
    },
    textfieldStyle: {
        margin: '10px 5px'
    },
    paperWidthSm:{
        minWidth: '600px'
    }
})

function UserModal(props){

    const classes = props.classes
    const closeHandler = props.closeHandler
    const isOpen = props.isOpen
    const modalType = props.modalType
    const modalFirstName = props.modalFirstName
    const modalLastName = props.modalLastName
    const modalAddress = props.modalAddress
    const handleOnChange = props.handleOnChange

    const saveButtonHandler = ()=>{
        console.log(document.getElementById('firstName').value);
    }


    const generateActionButtons = (modalType)=>{
        let buttonGroup = null
        if(modalType === 'Update'){
            buttonGroup = (
                <div>
                    <Button raised className={classes.buttonModalStyle}>
                        Update
                    </Button>
                    <Button raised color="accent" className={classes.buttonModalStyle}>
                        Delete
                    </Button>
                </div>
            )
        }else if(modalType === 'Add') {
            buttonGroup = (
                <Button raised disabled className={classes.buttonModalStyle} onClick={saveButtonHandler}>
                    Save
                </Button>
            )
        }
        return (
            <div>
                {buttonGroup}
            </div>
        )
    }

    const generateDialogText = (modalType)=>{
        if(modalType === 'Update'){
            return 'Update or remove the user. Make sure to click \'UPDATE\' when done editing the user\'s information'
        }else if(modalType === 'Add') {
            return 'Add a new user to the table'
        }
    }

    return (
        <div>
            <Dialog ref='dialog' className={classes.root} open={isOpen} onBackdropClick={closeHandler} classes={{paperWidthSm: classes.paperWidthSm}}>
                <DialogTitle>
                        {modalType}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {generateDialogText(modalType)}
                    </DialogContentText>
                    <div className={classes.textfieldContainer}>
                        <TextField
                            id='firstName'
                            label='First Name'
                            className={classes.textfieldStyle}
                            onChange={handleOnChange}
                            value={modalFirstName}
                        />
                        <TextField
                            id='lastName'
                            label='Last Name'
                            className={classes.textfieldStyle}
                            onChange={handleOnChange}
                            value={modalLastName}
                        />
                        <TextField
                            id='address'
                            label='Address'
                            className={classes.textfieldStyle}
                            onChange={handleOnChange}
                            value={modalAddress}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    {generateActionButtons(modalType)}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(UserModal)
