import React from 'react';
import HandleChangeFuntionsHome from '../HandleChangeFunctions/FunctionsHome';
import HandleClickFuntionsHome from '../HandleClickFunctions/FunctionsHome';
import ProductPreview from '../components/ProductPreview';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

class Home extends React.Component {
  state = {
    searchInput: '',
    resultSearch: '',
  };

  handleSearchInputChange = HandleChangeFuntionsHome.handleSearchInputChange.bind(this);

  handleSearchButtonClick = HandleClickFuntionsHome.handleSearchButtonClick.bind(this);

  render() {
    const { searchInput, resultSearch } = this.state;
    return (
      <section>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          data-testid="query-input"
          type="text"
          value={ searchInput }
          placeholder="O Que Você Deseja Hoje?"
          onChange={ this.handleSearchInputChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleSearchButtonClick }
        >
          Pesquisar
        </button>
        <div>
          {resultSearch !== '' && (
            resultSearch.length === 0
              ? (<p>Nenhum produto foi encontrado</p>)
              : (resultSearch.map(({ id, title, thumbnail, price }) => (
                <ProductPreview
                  key={ id }
                  productImage={ thumbnail }
                  productName={ title }
                  productPrice={ price }
                />
              )))
          )}
        </div>
      </section>
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
