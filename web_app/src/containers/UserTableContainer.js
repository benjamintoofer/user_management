import React from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
// import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        width: '80%',
        margin: '40px auto'
    },
    row: {
        cursor: 'pointer'
    }
});

function UserTableContainer(props){
    const classes = props.classes
    const generateAllUserTableRows = (userList)=>{
        return userList.map((userInfo, index) =>{
            return generateSingleUserRow(userInfo, index)
        })
    }

    const generateSingleUserRow = (info, index)=> {
        return (
            <TableRow key={index} hover className={classes.row} onClick={props.openUpdateModalHandler.bind(this,index)}>
                <TableCell>{info.first}</TableCell>
                <TableCell>{info.last}</TableCell>
                <TableCell>{info.address}</TableCell>
            </TableRow>
        )
    }
    console.log(props);
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
                    {/* <TableRow key={0} hover className={classes.row} onClick={props.openUpdateModalHandler.bind(this,0)}>
                        <TableCell>Yo</TableCell>
                        <TableCell>Yo</TableCell>
                        <TableCell>Yo</TableCell>
                    </TableRow>
                    <TableRow key={1} hover className={classes.row} onClick={props.openUpdateModalHandler.bind(this,1)}>
                        <TableCell>Benjamin</TableCell>
                        <TableCell>Toofer</TableCell>
                        <TableCell>6343 E. Girard Ave.</TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
        </div>
    )
}

export default withStyles(styles)(UserTableContainer)
