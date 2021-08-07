import React from 'react';
import './App.css';

import {withStyles, Container  } from '@material-ui/core';

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Cardcomponent from './Card/Cardcomponent';
import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';
import Reactplayer from './Reactplayer/reactplayer';

const styles = theme => ({
  appContainer: {
    border: 'dotted 1px black',
    backgroundColor: '#f7f7f7'
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
      ingredientArray: [],
      measurementArray: [],
      strInstructions: null,
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
          ingredientArray: json.meals[0],
          measurementArray: json.meals[0],
          strInstructions: json.meals[0].strInstructions,
        })
        // let trialMeal = json.meals[0].strInstructions.replace("\\n", "\n");
        //         console.clear();
        //         console.log(trialMeal);
    })
  }

  render () {

// add ingredients list at ingredient component and a button component


         //Map Ingredients
         const strIngredients = this.state.ingredientArray;
         const strIngredientsList = Object.keys(strIngredients)
                                         .map(function(key, index) { return strIngredients[key] })
                                         .slice(9,28);
         const newStrIngredientsList = strIngredientsList.filter(function (el) { return el.trim(); })
                                                         .map((item) => { return <li className={this.props.classes.ingredientsListItem}>{item}</li> });

         //map Measurements
         const strMeasurements = this.state.measurementArray;
         const strMeasurementList = Object.keys(strMeasurements)
                                         .map(function(key,index){ return strMeasurements[key] })
                                         .slice(29, 48);

        const newStrMeasurementList = strMeasurementList.filter(function (element) { return element.trim(); }).map((item) => <li className={this.props.classes.measurementListItem}>{item}</li>)

        
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
        <Ingredients newStrIngredientsList={newStrIngredientsList} newStrMeasurementList={newStrMeasurementList}/>
        <Instructions strInstructions={this.state.strInstructions} />
        <Reactplayer url={this.state.strYoutube} />
      </Container>
    );
  }
}
export default withStyles(styles)(App);
