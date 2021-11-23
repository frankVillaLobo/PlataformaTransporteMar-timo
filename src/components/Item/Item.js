import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import { CartContext } from '../CartContext/CartContext';
import { Card, Button } from 'react-bootstrap'
import './item.css';
import '../../css/reset.css';
import '../../css/bootstrap.css';
import '../../css/styles.css';

function Item({image, name, id, price, prop}) {
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (e) => {
        setQuantity(e);
        addItem(prop, e);
    }
    return (
        <div className= "flex">
            <Card>
                <Card.Img clasName="img-fluid" style={{ width: '18rem', height: '16rem' }}  src={image}  />
                <Card.Body>
                    <Card.Title><p key={id} className="item-p"> {name} <span>${price}</span></p></Card.Title>                    
                    <div>
                    <br/>
                    <Link to={`/details/${id}`}>
                    <Button className="item-detail-container btn__item--detail" >Ver Más</Button>
                    </Link>
                        
                    </div>
                </Card.Body>
            </Card>
            </div>
        
    )
}
export default Item;