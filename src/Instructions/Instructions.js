import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    instructionsContainer: {
        borderTop: 'dotted 1px black',
        borderBottom: 'dotted 1px black',
        padding: '10px',
        margin: '2vh 0',
        maxHeight: '50vh',
        overflow: 'auto',
        backgroundColor: '#fdf3f3',
    },
})

const Instructions = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.instructionsContainer}>
            <Typography variant="body2" color="textPrimary"component='p'>
                {props.strInstructions}
            </Typography>
        </Grid>
    )

}

export default Instructions