import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    playerContainer: {
        padding : '1.5rem 0',
        height: '42vh',
        justifyContent: 'center',
        alignItems: 'center',
        
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
                controls = 'true'
                url = {url}
                width = '86%'
                height = '100%'
                />
            </Grid>
        )
    
};


export default Reactplayer;