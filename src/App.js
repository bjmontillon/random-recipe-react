import React from 'react'
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Apiwrapper from './ApiWrapper/ApiWrapper'

const useStyles = makeStyles ({
  appContainer: {

  },
})

function App() {

  const classes = useStyles();
  return (
    <Container className={classes.appContainer} maxWidth='md'>
      <Header />
      <Navbar />
      <Apiwrapper />
    </Container>
  );
}

export default App;