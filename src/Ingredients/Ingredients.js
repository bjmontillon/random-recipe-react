import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listMainContainer: {
        padding: '10px',
        border: 'dotted 1px black',
        textAlign: 'center',
    },
    listContainer: {
        border: 'solid 1px black'
    },
    ingredientList: {
        listStyleType: "none",

    },
    measurementList: {
        listStyleType: "none",
    },
})


const Ingredients = (props) => {

    const classes = useStyles()

    return (
        < Grid container className={classes.listMainContainer} xs={12} lg={6}>
            <Grid container className={ classes.listContainer } xs={12}>
                <Grid item xs={12}>
                    <h1>Ingredients</h1>
                </Grid>
                <Grid item xs={6}>
                <ul className={classes.ingredientList}>
                                {props.newStrIngredientsList}</ul>
                </Grid>
                <Grid item xs={6}> 
                <ul className={classes.measurementList}>
                                {props.newStrMeasurementList}</ul>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Ingredients;