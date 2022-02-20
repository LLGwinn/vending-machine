import React from 'react';
import {Link} from 'react-router-dom';
import reeses from './images/reeses.jpg'
import './Snacks.css';

function Reeses () {

    return (
        <div className='Snacks'>
            <img src={reeses}></img>
            <Link to='/'>
                <button>Go back to the Vending Machine!</button>
            </Link>     
        </div>

    )
}

export default Reeses;