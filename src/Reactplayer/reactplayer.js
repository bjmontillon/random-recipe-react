import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Grid } from '@material-ui/core';


export class Reactplayer extends React.Component {
    render () {

        //const url = 'https://www.youtube.com/watch?v=Rq5SEhs9lws&t=622s';
        return (
            <Grid container>
                <ReactPlayer
                url = {''}
                controls = 'true'
                width = '640px'
                height = '360px'
                playbackRate = '1'
                />
            </Grid>
        )
    }
};


export default Reactplayer;