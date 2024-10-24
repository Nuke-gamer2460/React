//component class from react library
import React, { Component } from 'react';
//products extends component(parent)
class Products extends Component {
    render() {
        const products = ["Learning React", "Pro React", "Beginning React"];
        const listProducts = products.map((product) =>
            <li key={product.toString()}>{product}</li>
        );
        /*conditional rendering if list product is greater than 0
        then display product list in browser
        or else if there's no products. Display message 
        return (
            <div>
                {listProducts.length > 0 &&
                    <ul>{listProducts}</ul>
                }
                {listProducts.length == 0 &&
                    <ul>No Products to display</ul>
                }
            </div>
        );*/

       /*uses ternary operator  condition ? true : false*/
        return (
            <div>
                {listProducts.length > 0 ? (
                    <ul>{listProducts}</ul>
                ) : (
                    <ul>No Products to display</ul>
                )}
            </div>
        );
    }
}

export default Products;