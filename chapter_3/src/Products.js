//component class from react library
import React, { Component } from 'react';
//products extends component(parent)
class Products extends Component {
    render() {
        const products = ["Learning React", "Pro React", "Beginning React"];
        const listProducts = products.map((product) =>
            <li key={product.toString()}>{product}</li>
        );
        return (
            <div>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}
export default Products;