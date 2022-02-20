import React from 'react';
import {Link} from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {  

    return (
        <div className='VendingMachine'>
            <h3>REACT VENDING MACHINE</h3>
            <p>Select a snack!</p>
            <div>
                <Link to='/cookies'>Cookies</Link>
                <Link to='/cheetos'>Cheetos</Link>
                <Link to='/reeses'>Reese's</Link>           
            </div>
        </div>
    )
}

export default VendingMachine;