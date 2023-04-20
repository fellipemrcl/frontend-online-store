const ShoppingCartFunctions = {
  clickBtnQuantity: function clickBtnQuantity({ target }) {
    const productId = target.parentNode.id;
    const { name } = target;
    const { cart } = this.state;
    const productsCard = cart.map((product) => {
      if (product.id === productId) {
        if (name === 'increaseButton') {
          product.quantity += 1;
        } else {
          product.quantity -= 1;
        }
      }
      return product;
    });
    const productsCardString = JSON.stringify(productsCard);
    localStorage.setItem('cart', productsCardString);
    this.setState({
      cart: productsCard,
    });
  },
  deleteClick: function deleteClick({ target }) {
    const arrayCart = JSON.parse(localStorage.getItem('cart'));
    const productId = target.parentNode.id;
    const productsCard = arrayCart.filter(({ id }) => id !== productId);
    const productsCardString = JSON.stringify(productsCard);
    localStorage.setItem('cart', productsCardString);
    this.setState({
      cart: productsCard,
    });
  },
};

export default ShoppingCartFunctions;
