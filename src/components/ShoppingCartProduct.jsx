import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ShoppingCartProduct extends Component {
  render() {
    const { name,
      price,
      image,
      quantity } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="remove-product"
          // onClick={}
        >
          Excluir
        </button>
        <img src={ image } alt={ name } />
        <span>
          {name}
        </span>
        <button
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <span>{price}</span>
      </div>
    );
  }
}

ShoppingCartProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCartProduct;
