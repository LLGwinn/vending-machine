import React from 'react';
import {Link} from 'react-router-dom';
import cookies from './images/cookies.jpg'

function Cookies () {
    return (
        <div className='Snacks'>
            <img src={cookies}></img>
            <Link to='/'>
                <button>Go back to the Vending Machine!</button>
            </Link> 
        </div>
    )
}

export default Cookies;