import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listContainer: {
        border: 'solid 1px black',
        textAlign: 'center',
        maxHeight: '100%',
        overflow: 'scroll',
    },
   ingredientTitle: {
        margin: '0',
        fontSize: '1.5rem',
    },
    ingredientList: {
        listStyleType: "none",
        paddingInlineStart: '0',
        fontSize: '.8rem'
    },
    measurementList: {
        listStyleType: "none",
        paddingInlineStart: '0',
        fontSize: '.8rem'
    },
})


const Ingredients = (props) => {

    const classes = useStyles()

    return (
        // < Grid container className={classes.listMainContainer} lg={6}>
            <Grid container className={ classes.listContainer }>
            
                <Grid item xs={12} >
                    <h1 className={classes.ingredientTitle}>Ingredients</h1>
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
        // </Grid>
    )
}

export default Ingredients;