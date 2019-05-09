import React, { Component } from 'react';
import Product from './Product'

class ProductGrid extends Component {
  render() {
    const {search} = this.props

    let allProducts = this.props.products.map((product) => {
      return (
        <Product
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          {...this.props}
        />
      );
    });

    return (
      <div className="product-wrapper">
        <div className="left-side filters">
          <div className="filter-icon">
            <img src={ require('../assets/burger-menu.svg') } alt="Burger menu"/>
          </div>
          <ul>
            <li>Brand</li>
            <li>Diet</li>
            <li>Category</li>
            <li>Specials</li>
            <li>Bulk Buys</li>
          </ul>
        </div>

        <div className="right-side">
          <p>Showing results for 'Search query'</p>
          <div className="products">
            <div className="product">   
            {allProducts}
          <p>{search !== '' ? `Showing results for '${search}'...` : 'Showing all products...'}</p>
              {search !== '' ? this.props.searchResults.map((product) => { return ( <Product client={this.props.client} key={product.id.toString()} product={product}/> )}) : allProducts}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductGrid;