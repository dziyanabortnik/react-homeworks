import React, { useRef } from 'react';
import './MenuCard.css';
import { useDispatch } from 'react-redux';
import type { IMenuItem } from '../../features/slice/menuSlice';
import { addToCart } from '../../features/slice/cartSlice';

interface IMenuCardProps {
  items: IMenuItem[];
}

const MenuCard: React.FC<IMenuCardProps> = ({ items }) => {
  const dispatch = useDispatch();
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleAddToCart = (item: IMenuItem) => {
    const quantity = parseInt(inputRefs.current[item.id]?.value || '1', 10);
    if (quantity > 0) {
      dispatch(addToCart({ item, quantity }));
    }
  };
  
    return (
        <div className="menu-card-list">
          {items.map((item) => (
              <div key={item.id} className="menu-card">
                <div>
                  <img src={item.img || '/default-image.jpg'} alt={item.meal || 'Default Meal'} className="menu-image" />
                </div>
                <div className="menu-content">
                  <div className="menu-name-price">
                    <h3 className="menu-name">{item.meal || 'Unknown Meal'}</h3>
                    <p className="menu-price">$ {item.price ? item.price.toFixed(2) : 'N/A'} USD</p>
                  </div>
                  <p className="menu-description">
                    {item.instructions ? item.instructions.slice(0, 80) + '...' : 'No description available'}
                  </p>
                  <div className="menu-add-container">
                    <input
                        type="number"
                        defaultValue="1"
                        min="1"
                        className="card-input"
                        ref={(ref) => {
                          if (ref) inputRefs.current[item.id] = ref;
                        }}
                        title="Quantity"
                    />
                    <button
                      className="menu-add-button"
                      onClick={() => handleAddToCart(item)}
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

export default MenuCard;
