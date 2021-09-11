import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    sectionContainer: {
        height: '42vh',
        
        padding: '1vh 0',
    },

    sectionOne: {
        backgroundColor: '#FBE7C6',
    }

}) 


const SectionOne = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.sectionContainer}>
            <Grid item xs={12} className={classes.sectionOne}></Grid>
        </Grid>


    )


} 

export default SectionOne;
