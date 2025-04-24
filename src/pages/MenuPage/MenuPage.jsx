import React, { useState, useEffect } from 'react';
import MenuCard from './../../components/MenuCard/MenuCard';
import Tooltip from './../../components/ToolTip/ToolTip';
import './MenuPage.css';

const MenuPage = ({ onAddToCart }) => {

    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Dessert');
    // const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')// meal
          .then(response => response.json())
          .then(data => {
            const filteredItems = data.filter(item => item.category === selectedCategory);
            setMenuItems(filteredItems);
          })
          .catch(error => console.error('Error fetching menu:', error));
    
        // fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders')//orders
        //   .then(response => response.json())
        //   .then(data => {
        //     setOrders(data);
        //   })
        //   .catch(error => console.error('Error fetching orders:', error));
      }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    }

    const handleSeeMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const displayedItems = menuItems.slice(0, (currentPage + 1) * itemsPerPage);
    const showSeeMoreButton = displayedItems.length < menuItems.length;

        return (
            <main>
                <div className="container wrapper">
                    <section className='hero'>
                        <h1>Browse our menu</h1>
                        <p>Use our menu to place an order online, or <Tooltip text="phone" tooltipText="Call us: +370-670-3756"/> our store to place a pickup order. Fast and fresh food.</p>
                    </section>
                    <section className='categories'>
                        <button className={`category-button ${selectedCategory === 'Dessert' ? 'active' : ''}`} onClick={() => handleCategoryChange('Dessert')}>
                            Desert
                        </button>
                        <button className={`category-button ${selectedCategory === 'Dinner' ? 'active' : ''}`} onClick={() => handleCategoryChange('Dinner')}>
                            Dinner
                        </button>
                        <button className={`category-button ${selectedCategory === 'Breakfast' ? 'active' : ''}`} onClick={() => handleCategoryChange('Breakfast')}>
                            Breakfast
                        </button>
                    </section>

                    <MenuCard items={displayedItems} onAddToCart={onAddToCart} />

                    {showSeeMoreButton && (
                        <button className='see-more-button' onClick={handleSeeMore}>See more</button>
                    )}
                </div>
            </main>
        );
}

export default MenuPage;
