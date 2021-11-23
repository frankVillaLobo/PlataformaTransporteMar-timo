import React, {useEffect, useState} from 'react'
import {db} from '../../firebase';
import Item from '../Item/Item';

function ItemList() {
    const [products, setProducts] = useState([]);

	const addOrEdit = async (object) => {
		console.log(object);
		await db.collection('items').doc().set(object);
		console.log('nuevo producto agregado!');
	};

	const getProducts = () => {
		db.collection('items').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});
			setProducts(docs);
		});
	};

	useEffect(() => {
		getProducts();
	}, []);

    return (
        <div className="item-list flex">
        {products.map(p => 
            <div className="flex"  key={p.id}>
                <Item 
                    key={p.id}
                    image = {p.img} 
                    name={p.name}
                    id={p.id}
                    price={p.price}
                />
            </div>
        )}
    </div>
    )}

export default ItemList;