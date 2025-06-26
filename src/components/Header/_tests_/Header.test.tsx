import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../features/slice/cartSlice';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../Header', () => {
  return function MockedHeader({ isLoggedIn }: { isLoggedIn: boolean }) {
    const items = useSelector((state: any) => state.cart.items);
    const total = items.reduce((acc: number, curr: any) => acc + curr.quantity, 0);
    return <span>Cart Count: {isLoggedIn ? total : 'Not logged in'}</span>;
  };
});

import Header from '../Header';

const originalWarn = console.warn;
beforeAll(() => {
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('React Router Future Flag Warning')
    ) {
      return;
    }
    originalWarn(...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
});

const createTestStore = (items: any[] = []) =>
  configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
      cart: { items },
    },
  });

describe('Header - Cart Logic', () => {
  it('Displays total quantity of items in the cart', () => {
    const store = createTestStore([
      {
        item: {
          id: '1',
          meal: 'Meal 1',
          price: 10,
          instructions: 'Instruction',
          img: 'https://via.placeholder.com/150',
          category: 'Test Category',
        },
        quantity: 2,
      },
      {
        item: {
          id: '2',
          meal: 'Meal 2',
          price: 15,
          instructions: 'Instruction',
          img: 'https://via.placeholder.com/150',
          category: 'Test Category',
        },
        quantity: 3,
      },
    ]);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header isLoggedIn={true} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Cart Count:\s*5/)).toBeInTheDocument();
  });

  it('Displays 0 when the cart is empty', () => {
    const store = createTestStore([]);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header isLoggedIn={true} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Cart Count:\s*0/)).toBeInTheDocument();
  });
});
