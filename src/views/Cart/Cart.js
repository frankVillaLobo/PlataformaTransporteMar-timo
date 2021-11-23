import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {CartContext} from '../../components/CartContext/CartContext';
import { Card, Button } from 'react-bootstrap'
import './Cart.css';
import empty from '../../contenido/empty.png'

function Cart() {
    const {cart, removeItem, clear, totalPrice} = useContext(CartContext);

    return (
        <div>
            <div>
                <h2 className="titulo">Carrito de compras</h2>
            </div>
            <div>
                <section >
                    <div className="form-cart cart container" id="form_cart">
                        { cart.length === 0 ? 
                            <div>
                                <img src={empty} style={{ width: 300}} className="img__empty img-fluid"></img>
                                <p><b>TU CARRITO ESTÁ VACÍO</b></p>
                                <Link to="/products"><Button className="btn" variant="info">Ir a productos</Button></Link>
                            </div>
                            :
                            <div className="cart-div">
                                {cart.map( i => 
                                    <div className="flex cart-item"  key={i.item.id}>
                                        <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={i.item.img} size='60px' centered={true} />
                                        
                                        <Card.Body>
                                            <Card.Title><p>{i.item.name} {i.item.title} ${i.item.price}</p></Card.Title>                    
                                            <p className="cart-p-item">Cantidad: {i.quantity}</p>
                                            <p className="cart-p-item">Total Productos: ${i.item.price * i.quantity}</p>
                                            <Button variant="danger" className="remove-item" onClick={()=>removeItem(i.item.id)}>Borrar</Button>
                                        </Card.Body>

                                        </Card>
                                    </div>  
                                )}
                                
                                <p className="cart-total">TOTAL:${totalPrice.toFixed(2)}</p>
                                <div className="cart-checkout">
                                    <Link to="/order-form">
                                        <Button className="btn btn__pago">Realizar Pago</Button><br></br><br></br>
                                    </Link>
                                </div>
                                <div className="cart-buttons">
                                    <Link to="/products"><Button className="btn btn__seguir">Seguir comprando</Button></Link>
                                    <Button className="btn btn__vaciar" onClick={clear}>Vaciar carrito</Button>
                                </div> 
                            </div>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Cart;