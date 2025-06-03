import React, { useState, useEffect } from 'react';
import MenuCard from '../../components/MenuCard/MenuCard';
import Tooltip from '../../components/ToolTip/ToolTip';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { fetchMenuItems, setCategory, incrementPage, IMenuItem } from '../../features/slice/menuSlice';
import './MenuPage.css';

const MenuPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { items, selectedCategory, loading, currentPage } = useSelector((state: RootState) => state.menu);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(fetchMenuItems(selectedCategory));
    }, [selectedCategory, dispatch]);

    const handleCategoryChange = (category: string) => {
        dispatch(setCategory(category));
    }

    const handleSeeMore = () => {
        dispatch(incrementPage());
    };

    const displayedItems = items.slice(0, (currentPage + 1) * itemsPerPage);
    const showSeeMoreButton = displayedItems.length < items.length;

        return (
            <main>
                <div className="container wrapper">
                    <section className='hero'>
                        <h1>Browse our menu</h1>
                        <p>Use our menu to place an order online, or <Tooltip text="phone" tooltipText="Call us: +370-670-3756"/> our store to place a pickup order. Fast and fresh food.</p>
                    </section>
                    <section className='categories'>
                        {['Dessert', 'Dinner', 'Breakfast'].map((category) => (
                        <button
                           key={category}
                           className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                           onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                        ))}
                    </section>

                    {loading ? (
                        <p>Loading…</p>
                    ) : (
                    <>
                        <MenuCard items={displayedItems} />
                        {showSeeMoreButton && <button className='see-more-button' onClick={handleSeeMore}>See more</button>}
                    </>
                    )}
                </div>
            </main>
        );
}

export default MenuPage;
