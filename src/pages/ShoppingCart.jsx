import React, { Component } from 'react';
import ShoppingCartProduct from '../components/ShoppingCartProduct';
import ShoppingCartFunctions from '../HandleClickFunctions/ShoppingCartFunctions';

class ShoppingCart extends Component {
  productCart = JSON.parse(localStorage.getItem('cart')) || [];

  state = {
    cart: [...this.productCart],
  };

  clickBtnQuantity = ShoppingCartFunctions.clickBtnQuantity.bind(this);

  deleteClick = ShoppingCartFunctions.deleteClick.bind(this);

  render() {
    const { cart } = this.state;
    return (
      <section>
        {cart.length > 0 ? cart.map((product) => {
          const { price, title, thumbnail, id, quantity } = product;
          return (
            <ShoppingCartProduct
              key={ id }
              id={ id }
              name={ title }
              price={ price }
              image={ thumbnail }
              quantity={ quantity }
              clickBtnQuantity={ this.clickBtnQuantity }
              clickBtnDelete={ this.deleteClick }
              quantityTotal={ product.available_quantity }
            />
          );
        })
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </section>
    );
  }
}

export default ShoppingCart;
