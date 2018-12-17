class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0
  };
  handleRemoveItem = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };
  handleAddItem = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    });
  };
  render() {
    const { shoppingCart, availableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
    return (
      <div>
        <button
          disabled={shoppingCart === 0 ? true : false}
          onClick={this.handleRemoveItem}
        >
          -
        </button>
        <span style={style}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddItem}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Buy</button>}
        <p>
          Available items: <strong>{availableProducts}</strong>.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
