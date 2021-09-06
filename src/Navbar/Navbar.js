import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from '../Login/Login';
import LogoutButton from '../Login/Logout';
import Profile from '../Login/Profile';

const useStyles = makeStyles({
    headerContainer: {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
    },
    headerTitle: {
        fontWeight: '600',
        fontFamily: "'Quicksand', sans-serif",
        color: 'black',
    },
})

function Navbar () {
    const classes = useStyles();
    return (
        <Grid className={classes.headerContainer} 
        container
        xs={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}>
        
            <Grid item><LoginButton /></Grid>
            <Grid item><LogoutButton /></Grid>
            <Grid item><Profile /></Grid>
        </Grid>

    )

}

export default Navbar