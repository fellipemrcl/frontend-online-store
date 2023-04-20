import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class DetailsPage extends Component {
  state = {
    productInfo: '',
  };

  componentDidMount() {
    this.retrieveProduct();
  }

  retrieveProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    this.setState({
      productInfo: product,
    });
  };

  render() {
    const { productInfo,
      productInfo: { title, price, thumbnail, attributes } } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <h3 data-testid="product-detail-price">{ price }</h3>
        <ul>
          Especificações:
          { productInfo !== '' && attributes
            .map((att, index) => (
              <li
                key={ index }
              >
                {`${att.name}: ${att.value_name}`}
              </li>)) }
        </ul>
        <button data-testid="shopping-cart-button">
          <Link to="/shoppingcart">Carrinho</Link>
        </button>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default DetailsPage;
