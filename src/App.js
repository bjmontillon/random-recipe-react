import React from 'react'
import './App.css';

import {withStyles, Container  } from '@material-ui/core';

import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Cardcomponent from './Card/Cardcomponent'
import Ingredients from './Ingredients/Ingredients'
import Reactplayer from './Reactplayer/reactplayer'

const styles = theme => ({
  appContainer: {
    border: 'dotted 1px black',

  },

});



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingRecipe: false,
      strYoutube: null,
      strMeal: null,
      strSource: null,
      strThumb: null,
      strTags: null,
      strCategory: null,
      strArea: null,
    };
  };

  componentDidMount () {
    this.fetchRecipe();
  }

  fetchRecipe () {
    fetch ('https://www.themealdb.com/api/json/v1/1/random.php', {
      method: 'GET',
        headers : {
          Accept: "application/json",
        }
    })
    .then (response => response.json ())
    .then (json => {
        this.setState ({
          isFetchingRecipe: false,
          strYoutube: json.meals[0].strYoutube,
          strMeal: json.meals[0].strMeal,
          strSource: json.meals[0].strSource,
          strThumb: json.meals[0].strMealThumb,
          strTags: json.meals[0].strTags,
          strCategory: json.meals[0].strCategory,
          strArea: json.meals[0].strArea,
        })
        let trialMeal = json.meals[0];
                console.clear();
                console.log(trialMeal);
    })
  }

  render () {


  
    return (
      
      <Container className={this.props.classes.appContainer} maxWidth='md'>
        <Header />
        <Navbar />
        <Cardcomponent 
          cycleMethod={this.state.isFetchingRecipe} 
          strMeal={this.state.strMeal} 
          strThumb={this.state.strThumb}
          strSource={this.state.strSource} 
          strTags={this.state.strTags}
          strCategory={this.state.strCategory}
          strArea={this.state.strArea}
          />
        <Ingredients  />
        <Reactplayer url={this.state.strYoutube} />
      </Container>
    );
  }
}
export default withStyles(styles)(App);
