import React from 'react';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
      </div>
    );
  }
}

export default Home;
