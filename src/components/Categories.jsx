import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.populateCategories();
  }

  populateCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <section>
        { categories.map(({ id, name }) => (
          <button
            key={ id }
            data-testid="category"
          >
            {name}
          </button>)) }
      </section>
    );
  }
}

export default Categories;
