import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OrderPage from '../OrderPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../features/slice/cartSlice';

const renderWithStore = (cartItems: any[] = []) => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
      cart: { items: cartItems },
    },
  });

  return {
    ...render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    ),
    store,
  };
};

const testItem = {
  item: {
    id: '52767',
    meal: 'Bakewell tart',
    price: 7.22,
    img: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
  },
  quantity: 2,
};

describe('OrderPage', () => {
  it('Renders items in the cart', () => {
    renderWithStore([testItem]);
    expect(screen.getByText('Bakewell tart')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    expect(screen.getByText(/\$ 14\.44/i)).toBeInTheDocument();
  });

  it('Allows removing item from cart', () => {
    const { store } = renderWithStore([testItem]);
    fireEvent.click(screen.getByText('X'));

    const state = store.getState();
    expect(state.cart.items).toHaveLength(0);
  });

  it('Updates item quantity', () => {
    const { store } = renderWithStore([testItem]);
    const input = screen.getByDisplayValue('2');
    fireEvent.change(input, { target: { value: '3' } });

    const state = store.getState();
    expect(state.cart.items[0].quantity).toBe(3);
  });

  it('Shows total price correctly', () => {
    renderWithStore([testItem]);
    expect(screen.getByText(/\$ 14\.44/i)).toBeInTheDocument();
  });

  it('Triggers alert on order', () => {
    window.alert = jest.fn();
    renderWithStore([testItem]);

    fireEvent.click(screen.getByText('Order'));
    expect(window.alert).toHaveBeenCalledWith('Order placed!');
  });
});
