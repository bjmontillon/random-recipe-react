import React from 'react';
import { Grid, Card, CardHeader, CardMedia, CardContent, Avatar, Link, Typography,  } from '@material-ui/core';
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from '@material-ui/core/styles';


import { FacebookShareButton, TwitterShareButton, TwitterIcon, FacebookIcon } from 'react-share';

const useStyles = makeStyles  ({
    rootContainer: {
        //border: '1px solid black',
        padding: '2vw',
        backgroundColor: '#fdf3f3',
    },
    cardContainer: {
        //border: '1px dotted red',
        minHeight: '330px',
        padding: '10px',
        justifyContent: 'center'
    },
    rootCard: {
        minWidth: '320px',
        maxWidth: '320px',
        boxShadow: 'rgb(213, 210, 208) 5px 5px 15px, rgb(255, 255, 255) -5px -5px 15px',
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


    //Social Media Buttons

    const size = '2rem';
    const url = props.strSource;
     

   // const url = props.strSource;
    //    <IconButton aria-label="add to favorites"><FavoriteBorderIcon /> </IconButton>
    //    <IconButton aria-label="share"> <ShareIcon /></IconButton>


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
                
            
                <FacebookShareButton 
                    url = {url}
                    quote = 'A must try recipe'
                    hashtag = '#randomrecipe'
                    >
                    <FacebookIcon size={size}/>
                </FacebookShareButton>
                        
                <TwitterShareButton
                    url = {url}
                    //via = 'hello'
                    title = 'Random-Recipe'
                    hashtags = {['randomrecipe', props.strCategory, props.strTags, props.strArea]}
                    >
                    <TwitterIcon size={size} />
                </TwitterShareButton>
            
            </Card>
        </Grid>
    )

}

export default Cardcomponent;