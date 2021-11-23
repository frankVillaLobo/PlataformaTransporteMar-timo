import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1);
    stock = 5;
    
    const handlerPlus = () => {
      setQuantity((quantity === stock) ? stock : quantity + 1 )
    };
    const handlerMinus = () =>{
      setQuantity((quantity >= 2) ? quantity - 1 : quantity)
    }

    return (
          <div>
            <div className="container flex">
              <Button className="btn__minus" onClick={handlerMinus}>-</Button><p id="counter-value">{quantity}</p><Button className="btn__plus" onClick={handlerPlus}>+</Button>             
            </div>
            <br/>
            <div>
              <Button className="btn__comprar" onClick={()=>onAdd(quantity)}>Comprar</Button>  
            </div>
          </div>
            
              
    )
}
export default ItemCount;