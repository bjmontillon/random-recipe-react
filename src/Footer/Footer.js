import React from 'react';
import { makeStyles, Grid, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    footerContainer: {
        borderTop: '2px solid black',
        minHeight: '30vh',
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
    },

})
const Footer = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.footerContainer}>
            <Grid item xs={12} lg={1}>
                <Link href='https://www.facebook.com/profile.php?id=100011215170729' rel='noreferrer noopener' target='_blank' underline='none' color="inherit"><FacebookIcon /></Link>
            </Grid>
            <Grid item xs={12} lg={1}>
            <Link href='https://twitter.com/PangilinanBj' rel='noreferrer noopener' target='_blank'underline='none' color="inherit"><TwitterIcon /></Link>
                
            </Grid>
            <Grid item xs={12} lg={1}>
            <Link href='https://github.com/bjmontillon' rel='noreferrer noopener' target='_blank' underline='none' color="inherit"><GitHubIcon /></Link>
                
            </Grid>
        </Grid>
    )    
}

export default Footer;