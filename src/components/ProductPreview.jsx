import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ClickFunctions from '../ClickFunctions';

class ProductPreview extends Component {
  clickBtnAddToCart = ClickFunctions.clickBtnAddToCart.bind(this);

  render() {
    const {
      product,
      product: {
        thumbnail,
        title,
        price,
        id,
        shipping,
      },
    } = this.props;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/product-details/${id}` }
        >
          <img src={ thumbnail } alt={ title } />
          {shipping.free_shipping && <p data-testid="free-shipping">Frete Gratis</p>}
          <p>{title}</p>
          <p>{price}</p>
        </Link>
        <button
          onClick={ () => this.clickBtnAddToCart(product) }
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
    quantity: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }),
};

ProductPreview.defaultProps = {
  product: PropTypes.shape({
    quantity: 1,
  }),
};

export default ProductPreview;
