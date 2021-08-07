import React from 'react';
import { Grid, Card, CardHeader, CardMedia, CardContent, Avatar, Link, Typography, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles  ({
    rootContainer: {
        //border: '1px solid black',
        padding: '2vw',
        backgroundColor: '#fdf3f3',
    },
    cardContainer: {
        border: '1px dotted red',
        padding: '10px',
    },
    rootCard: {
        minWidth: '320px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: '2px 20px',
    },
    avatar: {
        backgroundColor: 'red',
    }, 
    sourceLink: {
        fontSize: '.8rem',
        color: 'black',
        textDecoration: 'none',
        fontStyle: 'italic',
    },
})

const Cardcomponent = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.cardContainer}>
            <Card className={classes.rootCard} >
                <CardHeader 
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {props.strMeal}
                        </Avatar>
                    }
                    title={props.cycleMethod? 'Loading Recipe...': props.strMeal}
                    subheader={<Link href={props.strSource} 
                                    target='_blank' 
                                    rel='noreferrer'>
                                    <LinkIcon />
                                </Link> }
                                    />
                
                <CardMedia className={classes.media} image={props.strThumb} title='Random-recipe'/>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.cycleMethod? 'Tags' : props.strTags + " | " + props.strCategory + " | " + props.strArea}
                    </Typography>
                </CardContent>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </Card>
        </Grid>
    )

}

export default Cardcomponent;