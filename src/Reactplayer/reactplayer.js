import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Grid } from '@material-ui/core';


const Reactplayer = ({ url }) => {
    

        //const url = 'https://www.youtube.com/watch?v=Rq5SEhs9lws&t=622s';
        return (
            <Grid container lg={6}>
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