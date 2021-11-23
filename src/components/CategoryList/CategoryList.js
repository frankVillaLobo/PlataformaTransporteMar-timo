import React, { useState, useEffect } from 'react';
import {db} from '../../firebase';
import Item from '../Item/Item';

function Categories({match}) {
    let itemCategory = match.params.id;
    const [category, setCategory] = useState ([]);

    const getItems = () => {
		db.collection('items').where('type','==', itemCategory).get().then((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setCategory(docs);
		});
	};
	useEffect(() => {
    getItems();
	});

    return (
        <div className="category-list">
            <h2>{itemCategory.toUpperCase()}</h2>
            <div className="category flex container">
                {category.map(p=> <Item image={p.img} name={p.name} id={p.id} price={p.price} />)}
            </div>
        </div>
    )
}
export default Categories;