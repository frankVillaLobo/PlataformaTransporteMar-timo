// TIME STAMP
import React, {useContext, useState} from 'react';
// CONTEXT
import {CartContext} from '../../components/CartContext/CartContext';
// FIREBASE
import {db} from '../../firebase.js';
// DATE
import SimpleDateTime  from 'react-simple-timestamp-to-date';

import { Form, Button } from 'react-bootstrap';
// SCSS
//import './_Contact.scss';
import './Ordenes.css';

import check from '../../contenido/check.png'

import { Link } from 'react-router-dom';

function Ordenes() {
    
    const {totalPrice, cart, setCart} = useContext(CartContext);
    const [user, setUser] = useState({});
    const [order, setOrder] = useState('');

    const nameChange = (e) => {
        let customer = user;
        customer.name = e.target.value;
        setUser(customer);
    };

    const emailChange = (e) => {
        let customer = user;
        customer.email = e.target.value;
        setUser(customer);
    };

    const phoneChange = (e) => {
        let customer = user;
        customer.phone = e.target.value;
        setUser(customer);
    };

    const newOrder = async(object) => {
        const newOrder = await db.collection('order').add(object);
        setOrder(newOrder.id);
    };
    
    const orderSubmit = (e) => {
        e.preventDefault();
        let order = {
          buyer: user,
          items: cart,
          date: new Date(),
          total: totalPrice
        };
        newOrder(order);
        console.log("Hola")
        setCart([])
    };

    return (
        <div>
            <div>
                <h2 className="titulo">FORMULARIO DE COMPRA</h2>
            </div>
            <div className="form-cart">
                <section id="form">
                    {totalPrice !== 0 ? (
                        <Form className="container">
                         
                            <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label for="Nombre">Nombre Completo</Form.Label>
                            <Form.Control type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre" required onChange={nameChange}></Form.Control>
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTelefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" name="telefono" id="telefono" placeholder="Telefono" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" id="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicFecha">
                            <Form.Label>Fecha:</Form.Label>
                            <p><SimpleDateTime dateSeparator="-" format="DMY" showTime="0">{new Date()}</SimpleDateTime></p>
                            
                            </Form.Group>

                            <div className="section-contacto__form--nombre order-total">
                                    <label>Total:</label>
                                    <p>$ {totalPrice}</p>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Confirmar Compra" />
                            </Form.Group>
                            <div className="section-contacto__form--borrar-enviar">
                                <Button className="btn__borrar" type="reset" id="borrar">
                                    Borrar
                                </Button>
                                <Button className="btn__enviar" type="submit" id="enviar" onClick={(e)=>orderSubmit(e)}>
                                    Enviar
                                </Button>   
                                
                                    {/* <div>
                                        <button type="reset" id="borrar" className="rounded btn-outline-dark">borrar</button>
                                    </div> */}
                                    {/* <div>
                                        <button type="submit" id="enviar" className="rounded btn-outline-dark" onClick={(e)=>orderSubmit(e)}>enviar</button>
                                    </div> */}
                            </div>
                      </Form> ) : (
                            <Form className="container">
                                <img className="img__check" src={check} style={{width:400}}></img>
                                <p>¡Orden realizada con éxito!</p>
                                <p>Su número de compra es {order}</p>
                                <Button className="btn__volver"><Link className="link__volver" to="/products">Volver</Link></Button>
                                

                            </Form>

                            
                        )
                    }
                    
                </section>
            </div>
        </div>
    )
}

export default Ordenes;
