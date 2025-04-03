import React from 'react';
import './MenuCard.css';

function MenuCard({ items }) {
    return (
        <div className="menu-card-list">
            {items.map((item) => (
                <div key={item.id} className="menu-card">
                    <div>
                        <img src={item.image} alt={item.name} className="menu-image" />
                    </div>

                    <div className="menu-content">
                        <div className="menu-name-price">
                            <h3 className="menu-name">{item.name}</h3>
                            <p className="menu-price">{item.price}</p>
                        </div>
                        <p className="menu-description">{item.description}</p>
                        <div className="menu-add-container">
                            <input type="number" value="1" class="card-input"/>
                            <button className="menu-add-button">Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuCard;
