import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    playerContainer: {
        padding : '1px',
        height: '42vh',
        border: '1px solid black',
        boxShadow: 'rgb(213, 210, 208) 5px 5px 15px, rgb(255, 255, 255) -5px -5px 15px',
    },
    reactPLayer: {
        
    },
})


const Reactplayer = ({ url }) => {
    
    const classes = useStyles();

        //const url = 'https://www.youtube.com/watch?v=Rq5SEhs9lws&t=622s';
        return (
            <Grid container className={classes.playerContainer}>
                <ReactPlayer
                
                url = {url}
                controls = 'true'
                width = '100%'
                height = '100%'
                playbackRate = '1'
                />
            </Grid>
        )
    
};


export default Reactplayer;