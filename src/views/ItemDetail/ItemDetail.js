import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../components/CartContext/CartContext';
import ItemCount from '../../components/ItemCount/ItemCount';
import {Button } from 'react-bootstrap'
import './ItemDetail.css';

function ItemDetail({prop}) {
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (e) => {
        setQuantity(e);
        addItem(prop, e);
    }

    return (
    <>
                <div className="card" style={{ width: '30rem', height: 'auto' }}>
                    <img clasName="card-img-top img-fluid" src={prop.img} style={{ width: '478px', height: '293px'}} alt="Card image cap"/>
                    <div className="card-body details">
                        <h5 className="card-title"><p key={prop.id} className="prop-p">{prop.name}<span> ${prop.price}</span></p></h5>
                        <p class="card-text"><div>
                        <p className="prop-p-description">{prop.description}</p>
                        {quantity === 0 ? 
                            <ItemCount stock={prop.stock} name={prop.title} onAdd={onAdd}/>
                        :   <div className="terminar-compra">
                                <p><b>Compraste {quantity} {prop.title}</b></p>
                            <Link to={'/cart'} ><Button className="btn btn-info btn-compra">Terminar compra</Button></Link>
                            </div>        
                        }
                        </div></p>
                        
                    </div>
                </div>
    </>
    )
}
export default ItemDetail;