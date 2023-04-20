import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductPreview extends Component {
  addToCartBtn = () => {
    const { product } = this.props;
    const productString = JSON.stringify(product);
    localStorage.setItem(product.id, productString);
  };

  render() {
    const { product: { thumbnail, title, price, id } } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/product-details/${id}` }>
          <img src={ thumbnail } alt={ title } />
          <p>{title}</p>
          <p>{price}</p>
        </Link>
        <button
          onClick={ this.addToCartBtn }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductPreview.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductPreview;
