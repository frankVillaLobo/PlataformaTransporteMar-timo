import React from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

function Products() {
    return (
        <div className="products container">
            <h2 className="titulo">Puertos</h2>
            <div className="aside-productos">
                <section className="productos">
                    <ItemListContainer />
                </section>
            </div>
        </div>
    )
}
export default Products;