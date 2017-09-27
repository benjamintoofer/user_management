import React from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'

const styles = theme => ({
    root: {
        width: '80%',
        margin: '40px auto'
    },
    row: {
        cursor: 'pointer'
    },
    addUserButton: {
        'marginTop': '20px'
    }
})

function UserTableContainer(props){
    const classes = props.classes
    const generateAllUserTableRows = (userList)=>{
        return userList.map((userInfo, index) =>{
            return generateSingleUserRow(userInfo, index)
        })
    }

    const generateSingleUserRow = (info, index)=> {
        return (
            <TableRow key={index} hover className={classes.row} onClick={props.openUpdateUserModalHandler.bind(this,index)}>
                <TableCell>{info.first}</TableCell>
                <TableCell>{info.last}</TableCell>
                <TableCell>{info.address}</TableCell>
            </TableRow>
        )
    }

    return (
        <div className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateAllUserTableRows(props.listOfUsers)}
                </TableBody>
            </Table>
            <Button className={classes.addUserButton} raised color="primary" onClick={props.openAddUserModal}>
                Add User
            </Button>
        </div>
    )
}

export default withStyles(styles)(UserTableContainer)
