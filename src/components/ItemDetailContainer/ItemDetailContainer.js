import React, {useEffect, useState} from 'react';
import {db} from '../../firebase';
import ItemDetail from '../../views/ItemDetail/ItemDetail';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [item, setItem] = useState([]);

    const getItem = () => {
        db.collection('items').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
        setItem(docs);
        });
    }

    useEffect(() => {
        getItem();            
    }, []);

    let itemMatch = item.filter(item => item.id === itemID);

    return (
        <div className="item-detail-container flex">
            {itemMatch.map( (item) => 
                <div  key={item.id}>
                    <ItemDetail  prop={item}/>
                </div>
            )}
        </div>
    )
}
export default ItemDetailContainer;