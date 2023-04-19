import React from 'react';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
