import React, { Component } from 'react';
import MenuCard from './../../components/MenuCard/MenuCard';
import Tooltip from './../../components/ToolTip/ToolTip';
import './MenuPage.css';

class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
            orders: [],
            currentPage: 0,
            itemsPerPage: 6,
        };
    }

    componentDidMount() {
        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals') //meal
            .then(response => response.json())
            .then(data => {
                const filteredItems = data.filter(item => item.category === 'Dessert');
                this.setState({ menuItems: filteredItems });
            })
            .catch(error => console.error('Error fetching menu:', error));

        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders') //orders
            .then(response => response.json())
            .then(data => {
                this.setState({ orders: data });
            })
            .catch(error => console.error('Error fetching orders:', error));
    }

    handleSeeMore = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1,
        }));
    };

    render() {
        const { menuItems, currentPage, itemsPerPage } = this.state;
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
                        <button className='category-button active'>Desert</button>
                        <button className='category-button' disabled>Dinner</button>
                        <button className='category-button' disabled>Breakfast</button>
                    </section>

                    <MenuCard items={displayedItems} onAddToCart={this.props.onAddToCart} />

                    {showSeeMoreButton && (
                        <button className='see-more-button' onClick={this.handleSeeMore}>See more</button>
                    )}
                </div>
            </main>
        );
    }
}

export default MenuPage;
