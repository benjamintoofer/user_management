import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
});

function TitleBar(props){
    const classes = props.classes

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        User Management
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(TitleBar)
