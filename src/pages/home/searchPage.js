import React from 'react'
 import './searchPage.css';
 import {Card, CardContent,Typography} from '@material-ui/core'
import { useStateValue } from '../../context/stateProvider';
import useGoogleSearch from '../../hooks/useGoogleSearch';


function SearchPage() {
    
    //https://developers.google.com/custom-search/v1/using_rest
    //https://cse.google.com/cse/create/new
   

    const[{term},dispatch] = useStateValue();
    const {data} =useGoogleSearch(term);
    console.log(data);
    return (
        <div className="searchPage">
           <div className="header">
          
          <Card>
              <CardContent>
             <Typography>Search Results</Typography>
              </CardContent>
          </Card>
           </div>

           <div className="results">
               <h1>{term}</h1>
               
            </div>
        </div>
    )
}

export default  SearchPage;
