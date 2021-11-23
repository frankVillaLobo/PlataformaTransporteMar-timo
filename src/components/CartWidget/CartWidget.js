import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../CartContext/CartContext';
import icon from './icon.png';
import './CartWidget.css';

function CartWidget () {
    const {cart, totalQuantity} = useContext(CartContext);

    return (
        <div>
            { cart.length === 0 ? 
            <div></div>
            :
            <Link to='/cart' className='flex'>
                <div className="cart-img">
                    <img className="logo" src={icon} alt="Cart Logo"/>
                </div>
                <div>
                    <p className="cant_logo">{totalQuantity}</p>
                </div>
            </Link>
        }
        </div>
    )
}
export default CartWidget;