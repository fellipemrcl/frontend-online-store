import React from 'react';
import { Link } from 'react-router-dom';
import HandleChangeFuntionsHome from '../HandleChangeFunctions/FunctionsHome';
import HandleClickFuntionsHome from '../HandleClickFunctions/FunctionsHome';
import ProductPreview from '../components/ProductPreview';
import Categories from '../components/Categories';

class Home extends React.Component {
  state = {
    searchInput: '',
    resultSearch: '',
  };

  handleSearchInputChange = HandleChangeFuntionsHome.handleSearchInputChange.bind(this);

  handleSearchButtonClick = HandleClickFuntionsHome.handleSearchButtonClick.bind(this);

  // Teste no GitHub

  render() {
    const { searchInput, resultSearch } = this.state;
    return (
      <section>
        <input
          data-testid="query-input"
          type="text"
          value={ searchInput }
          placeholder="O Que Você Deseja Hoje?"
          onChange={ this.handleSearchInputChange }
        />
        <button
          data-testid="query-button"
          name={ `q=${searchInput}` }
          type="button"
          onClick={ this.handleSearchButtonClick }
        >
          Pesquisar
        </button>
        <div>
          <Categories onClick={ this.handleSearchButtonClick } />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <button>
            <Link to="/shoppingcart" data-testid="shopping-cart-button">Carrinho</Link>
          </button>
        </div>
        <div>
          {resultSearch !== '' && (
            resultSearch.length === 0
              ? (<p>Nenhum produto foi encontrado</p>)
              : (resultSearch.map((result) => (
                <ProductPreview
                  product={ result }
                  key={ result.id }
                />
              )))
          )}
        </div>
      </section>
    );
  }
}

export default Home;
