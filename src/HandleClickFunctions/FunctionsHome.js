import { getProductsFromCategoryAndQuery } from '../services/api';

const HandleClickFuntionsHome = {
  handleSearchButtonClick: async function handleSearchButtonClick({ target: { name } }) {
    const { results } = await getProductsFromCategoryAndQuery(name);
    this.setState({
      resultSearch: [...results],
    });
  },
};

export default HandleClickFuntionsHome;
