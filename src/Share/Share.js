import React from 'react';
import { Grid, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FacebookShareButton, TwitterShareButton, TwitterIcon, FacebookIcon, WhatsappShareButton, WhatsappIcon, InstapaperShareButton, InstapaperIcon, PinterestShareButton, PinterestIcon } from 'react-share';


const useStyles = makeStyles({
   cardAction: {
       justifyContent: 'center',
       padding: '0',
   },
   h3: {
       margin: '0 10px 0 0',
   }
   
})

const Share = (props) => {
    const classes = useStyles();
    const size = '1.5rem';
    const url = props.strSource;
    return(
        <CardActions className={classes.cardAction} disableSpacing>
            <h3 className={classes.h3}>Share this recipe... </h3>
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

            <WhatsappShareButton
                url = {url}
                title = {props.strSource}
            >
                <WhatsappIcon size={size}/>
            </WhatsappShareButton>

            <InstapaperShareButton
                url = {url}
                title = {props.strSource}
            >
                <InstapaperIcon size = {size}/>
            </InstapaperShareButton>

            <PinterestShareButton
                url = {url}
                title = {props.strSource}
            >
                <PinterestIcon size = {size}/>
            </PinterestShareButton>
    </CardActions>
    )
}

export default Share