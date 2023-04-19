const HandleChangeFuntionsHome = {
  handleSearchInputChange: function handleSearchInputChange({ target }) {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  },
};

export default HandleChangeFuntionsHome;
