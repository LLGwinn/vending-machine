import React from 'react';
import {Link} from 'react-router-dom';
import cheetos from './images/cheetos.jpg'

function Cheetos () {
    return (
        <div className='Snacks'>
            <img src={cheetos}></img>
            <Link to='/'>
                <button>Go back to the Vending Machine!</button>
            </Link>  
        </div> 
    )
}

export default Cheetos;