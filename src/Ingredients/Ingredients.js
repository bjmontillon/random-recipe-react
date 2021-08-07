import React from 'react'
import { Grid } from '@material-ui/core'


const Ingredients = (props) => {

    return (
        <Grid container>
            <Grid item>
                <h1>Ingredients</h1>
            </Grid>
            <Grid item>
            <ul >
                             {props.newStrIngredientsList}</ul>
            </Grid>
            <Grid item> 
            <ul>
                             {props.newStrMeasurementList}</ul>
            </Grid>
        </Grid>
    )
}

export default Ingredients;