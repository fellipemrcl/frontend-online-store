import { getProductsFromCategoryAndQuery } from '../services/api';

const HandleClickFuntionsHome = {
  handleSearchButtonClick: async function handleSearchButtonClick() {
    const { searchInput } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(searchInput);
    this.setState({
      resultSearch: [...results],
    });
  },
};

export default HandleClickFuntionsHome;
