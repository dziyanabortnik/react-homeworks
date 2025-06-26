import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuCard from '../MenuCard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../features/slice/cartSlice';

const renderWithStore = (items: any[] = []) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

  return {
    ...render(
      <Provider store={store}>
        <MenuCard items={items} />
      </Provider>
    ),
    store,
  };
};

const testItem = {
  id: '52767',
  meal: 'Bakewell tart',
  price: 7.22,
  img: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
  instructions: 'Some instructions here...',
};

describe('MenuCard', () => {
  it('Adds item to cart with correct quantity', () => {
    const { store } = renderWithStore([testItem]);

    const input = screen.getByTitle('Quantity') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '3' } });

    fireEvent.click(screen.getByText(/add to cart/i));

    const cartState = store.getState().cart;
    expect(cartState.items).toHaveLength(1);
    expect(cartState.items[0].item.id).toBe('52767');
    expect(cartState.items[0].quantity).toBe(3);
  });

  it('Increases quantity when adding the same item again', () => {
    const { store } = renderWithStore([testItem]);
  
    const input = screen.getByTitle('Quantity') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.click(screen.getByText(/add to cart/i));
  
    fireEvent.change(input, { target: { value: '3' } });
    fireEvent.click(screen.getByText(/add to cart/i));
  
    const cartState = store.getState().cart;
    expect(cartState.items).toHaveLength(1);
    expect(cartState.items[0].quantity).toBe(5);
  });
});
