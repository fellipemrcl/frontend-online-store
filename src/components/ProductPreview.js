import PropTypes from 'prop-types';
import { Component } from 'react';

class ProductPreview extends Component {
  render() {
    const { productImage, productName, productPrice } = this.props;
    return (
      <div data-testid="product">
        <img src={ productImage } alt={ productName } />
        <p>{productName}</p>
        <p>{productPrice}</p>
      </div>
    );
  }
}

ProductPreview.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default ProductPreview;
