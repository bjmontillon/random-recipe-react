import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    userName: {
        padding: '0',
        margin: '0',
        fontSize: '.6rem'
    },
    userEmail: {
        padding:'0',
        margin:'0',
        fontSize: '.5rem',
        fontStyle: 'italic',
    }
})

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const classes = useStyles();
    return (
        isAuthenticated && (
        <div>
        <p className={ classes.userName }>{user.nickname}</p>
        <p className={ classes.userEmail }>{user.name}</p>
        
        </div>
        )
    )

}

export default Profile;