import React from 'react';
import { Grid, Typography } from '@material-ui/core'

const Instructions = (props) => {
    return (
        <Grid contianer>
            <Typography>
                <p>{props.strInstructions}</p>
            </Typography>
        </Grid>
    )

}

export default Instructions