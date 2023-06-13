import { useContext } from 'react';
import React from 'react';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => (
    <div className='cart-dropdown-container'>
     <div className='cart-items'>
        <Button>Go to checkout</Button>
    </div>
    </div>
);


export default CartDropdown;