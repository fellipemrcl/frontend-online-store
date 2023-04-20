import React, { Component } from 'react';
import ShoppingCartProduct from '../components/ShoppingCartProduct';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const arrayCart = JSON.parse(localStorage.getItem('cart'));
    if (arrayCart) {
      this.setState({
        cart: [...arrayCart],
      });
    }
  }

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
