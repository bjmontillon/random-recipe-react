// import React from 'react';
// import { withStyles, Container, Grid, Card, CardHeader, CardMedia, CardContent, Link, Typography, Button, IconButton, Avatar } from '@material-ui/core';
// import AutorenewIcon from '@material-ui/icons/Autorenew';
// import LinkIcon from '@material-ui/icons/Link';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import ShareIcon from '@material-ui/icons/Share';




// const styles = theme => ({
//     rootContainer: {
//         //border: '1px solid black',
//         padding: '2vw',
//         backgroundColor: '#fdf3f3',
//     },
//     gridContainer: {
//         //border: '1px dotted black',
//     },
//     rootCard: {
        
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//         margin: '2px 20px',
//     },
//     avatar: {
//         backgroundColor: 'red',
//     }, 
//     sourceLink: {
//         fontSize: '.8rem',
//         color: 'black',
//         textDecoration: 'none',
//         fontStyle: 'italic',
//     },
//     gridOne: {
//         //border: '1px solid blue',
//     },
//     gridTwo: {
//         textAlign: 'center',
//         padding: '10px',
//     },
//     ingredientContainer: {
//         fontSize: '.8rem',
//     },
//     ingredientsList: {
//         paddingLeft: '10px',
        
//     },
//     ingredientsListItem: {
//         listStyleType: "none",
//     },
//     measurementList: {
//         paddingLeft: '10px',
//     },
//     measurementListItem: {
//         listStyleType: "none",
//     },
// });



// class Apiwrapper extends React.Component {
    
//     constructor() {
//         super();
//         this.state = {
//             isFetchingRecipe: false,
//             strMeal: null,
//             strThumb: null,
//             titleSubString: null,
//             strCategory: null,
//             strArea: null,
//             strTag: null,
//             ingredientArray: [],
//             measurementArray: [],
//             strYoutube : null,
//         };
//          this.randomRecipe = this.randomRecipe.bind(this);
//     };


//     fetchingRecipe () {
//         this.setState ({isFetchingRecipe: true});
//         fetch ('https://www.themealdb.com/api/json/v1/1/random.php' , {
//             method : 'GET',
//             headers: {
//                 Accept: 'application/json',
//             },
//         })
//         .then (response => response.json ())
//         .then (json => {
//                 this.setState ({
//                 strMeal: json.meals[0].strMeal,
//                 isFetchingRecipe: false,
//                 strThumb: json.meals[0].strMealThumb,
//                 titleSubString: json.meals[0].strMeal.substring(0, 1),
//                 strCategory: json.meals[0].strCategory,
//                 strArea: json.meals[0].strArea,
//                 strTags: json.meals[0].strTags,
//                 strSource: json.meals[0].strSource,
//                 ingredientArray: json.meals[0],
//                 measurementArray: json.meals[0],
//                 strYoutube: json.meals[0].strYoutube,
//             });

//                 let trialMeal = json.meals[0];
//                 console.clear();
//                 console.log(trialMeal);
            
            
//         });
//     };

//     randomRecipe () {
//         this.fetchingRecipe();
//     }
    
    
    
//     render () {


//         //Map Ingredients
//         const strIngredients = this.state.ingredientArray;
//         const strIngredientsList = Object.keys(strIngredients)
//                                         .map(function(key, index) { return strIngredients[key] })
//                                         .slice(9,28);
//         const newStrIngredientsList = strIngredientsList.filter(function (el) { return el.trim(); })
//                                                         .map((item) => { return <li className={this.props.classes.ingredientsListItem}>{item}</li> });

//         //map Measurements
//         const strMeasurements = this.state.measurementArray;
//         const strMeasurementList = Object.keys(strMeasurements)
//                                         .map(function(key,index){ return strMeasurements[key] })
//                                         .slice(29, 48);

//         const newStrMeasurementList = strMeasurementList.filter(function (element) { return element.trim(); }).map((item) => <li className={this.props.classes.measurementListItem}>{item}</li>)

//         //const me = this.state.strYoutube;
//         return (
//             <Container className={this.props.classes.rootContainer} spacing={2}>
//                 <Grid className={this.props.classes.gridContainer} container xs={12}>
//                     <Grid className={this.props.classes.gridOne} item xs={12} sm={6} lg={6} xl={6} >
//                         <Card className={this.props.classes.rootCard} >
//                             <CardHeader 
//                                 avatar={
//                                     <Avatar aria-label="recipe" className={this.props.classes.avatar}>
//                                         {this.state.titleSubString}
//                                     </Avatar>
//                                 }
//                                 title={this.state.isFetchingRecipe? 'Loading Recipe...': this.state.strMeal}
//                                 subheader={<Link href={this.state.strSource} 
//                                                 target='_blank' 
//                                                 rel='noreferrer'>
//                                                 <LinkIcon />
//                                             </Link> }
//                                                 />
                            
//                             <CardMedia className={this.props.classes.media} image={this.state.strThumb} title='Random-recipe'/>

//                             <CardContent>
//                                 <Typography variant="body2" color="textSecondary" component="p">
//                                     {this.state.isFetchingRecipe? 'Tags' : this.state.strTags + " | " + this.state.strCategory + " | " + this.state.strArea}
//                                 </Typography>
//                             </CardContent>
//                             <IconButton aria-label="add to favorites">
//                                 <FavoriteBorderIcon />
//                             </IconButton>
//                             <IconButton aria-label="share">
//                                 <ShareIcon />
//                             </IconButton>
//                         </Card>
//                         <Grid item className={this.props.classes.gridTwo}>  
//                             <Button onClick={this.randomRecipe}
//                                 endIcon={<AutorenewIcon />} 
//                                 className="myButton" 
//                                 color="primary" 
//                                 variant='outlined'
//                                 size='small'
//                                 disabled={this.state.isFetchingRecipe}>
//                             Random Recipe
//                             </Button>
//                         </Grid>
//                     </Grid>

                               
//                     <Grid container className={this.props.classes.ingredientContainer} xs={12} sm={6} lg={6} xl={6}>
//                         <Grid item xs={6} >
//                             <ul className={this.props.classes.ingredientsList}>
//                             {newStrIngredientsList}</ul>
//                         </Grid>
//                         <Grid item xs={6} >
//                             <ul className={this.props.classes.measurementList}>
//                             {newStrMeasurementList}</ul>
//                         </Grid>
//                     </Grid>
                
//                 </Grid>
                

//             </Container>

//         )
//     }

// }

// export default withStyles(styles)(Apiwrapper)