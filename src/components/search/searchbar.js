import React, {useState} from 'react';
import "./searchbar.css";
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function MySearch() {

    const [input, setInput]  = useState('');
    const history = useHistory();
    const Searched = e=>{
        e.preventDefault();
        console.log("searching",input);
        history.push('./searchPage')
    }
    return (
        <>
        <div className='body'>
        <form>
        <div className="container">
            
            <div className="search_input">
                <div className='search_inputs'>
               <input value={input} onChange={e => setInput(e.target.value)}/>
                </div>

            </div>

          
    </div>

    <div className='button1'>
              <Button type="submit" variant="outlined" value={input}  onClick={Searched} color='primary'>Search</Button>
                </div>
        
        </form>
        </div>
        

        <div>
            <h1>{input}</h1>
        </div>
        </>
    );
}

export default MySearch;