import React from 'react';
import MenuCard from './../../components/MenuCard/MenuCard';
import Tooltip from './../../components/ToolTip/ToolTip';
import './MenuPage.css';
import burgerDreams from './../../assets/images/menu/burger-dreams.png';
import burgerWaldo from './../../assets/images/menu/burger-waldo.png';
import burgerCali from './../../assets/images/menu/burger-cali.png';
import burgerBaconBuddy from './../../assets/images/menu/burger-bacon-buddy.png';
import burgerSpicy from './../../assets/images/menu/burger-spicy.png';
import burgerClassic from './../../assets/images/menu/burger-classic.png'

const items = [
    { 
        id: 1, 
        image: burgerDreams,
        name: 'Burger Dreams', 
        price: "$9.20 USD", 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 2,
        image: burgerWaldo,
        name: 'Burger Waldo', 
        price: "$10.00 USD", 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 3, 
        image: burgerCali, 
        name: 'Burger Cali',
        price: "$8.00 USD",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' 
    },  
    {
        id: 4,
        image: burgerBaconBuddy,
        name: 'Burger Bacon Buddy', 
        price: "$9.99 USD", 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 5,
        image: burgerSpicy,
        name: 'Burger Spicy',
        price: "$9.20 USD",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 6,
        image: burgerClassic,
        name: 'Burger Classic',
        price: "$8.00 USD",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
];

function MenuPage() {
    return (
        <main>
            <div className="container wrapper">
                <section className='hero'>
                    <h1>Browse our menu</h1>
                    <p>Use our menu to place an order online, or <Tooltip text="phone" tooltipText="Call us: +370-670-3756"/> our store to place a pickup order. Fast and fresh food.</p>
                </section>
                <section className='categories'>
                    <button className='category-button active'>Desert</button>
                    <button className='category-button'>Dinner</button>
                    <button className='category-button'>Breakfast</button>
                </section>
                
                <MenuCard items={items} />
                <button className='see-more-button'>See more</button>
            </div>
        </main>
    );
}

export default MenuPage;
