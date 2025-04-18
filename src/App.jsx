import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage/MenuPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  handleAddToCart = (item, quantity) => {
    const { cartItems } = this.state;
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      this.setState({ cartItems: updatedCart });
    } else {
      this.setState({ cartItems: [...cartItems, { ...item, quantity }] });
    }
  };

  getCartCount = () => {
    return this.state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  render() {
  return (
    <div>
      <Header cartCount={this.getCartCount()} />
      <MenuPage onAddToCart={this.handleAddToCart} />
      <Footer />
    </div>
  );
  }
}

export default App;
