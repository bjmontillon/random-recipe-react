import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
    sectionContainer: {
        height: '42vh',
        
        padding: '1vh 0',
    },

    sectionOne: {
        backgroundColor: '#FBE7C6',
    }

}) 


class SectionOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageThumb: null,
        }

        this.fetchImage = this.fetchImage.bind(this)
    }
    
    componenDidMount(){
        this.fetchImage()
    ;
    }

    
    
    
   fetchImage ()
{
    fetch ("https://www.themealdb.com/api/json/v1/1/categories.php", {
      method: 'GET',
        headers : {
          Accept: "application/json",
        }
    })

    .then (response => response.json ())
    .then (json => {
        console.log(json)
        // this.setState ({
        //     imageThumb: json.meals[0].[1]
            
        // })
        // console.log(json)

    })
}
    render () {
        

        return (
        <Grid container>
            <Grid item xs={12} ></Grid>
        </Grid>


    )
    }


} 

export default SectionOne;
