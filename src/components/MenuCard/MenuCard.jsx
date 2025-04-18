import React, { Component } from 'react';
import './MenuCard.css';

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
  }

  render() {
    const { items } = this.props;

    return (
      <div className="menu-card-list">
        {items.map((item) => (
          <div key={item.id} className="menu-card">
            <div>
              <img src={item.img} alt={item.meal} className="menu-image" />
            </div>
            <div className="menu-content">
              <div className="menu-name-price">
                <h3 className="menu-name">{item.meal}</h3>
                <p className="menu-price">$ {item.price} USD</p>
              </div>
              <p className="menu-description">{item.instructions.slice(0, 80)}...</p>
              <div className="menu-add-container">
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="card-input"
                  ref={(ref) => (this.inputRefs[item.id] = ref)}
                />
                <button
                  className="menu-add-button"
                  onClick={() =>
                    this.props.onAddToCart(item, parseInt(this.inputRefs[item.id].value, 10))
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MenuCard;
