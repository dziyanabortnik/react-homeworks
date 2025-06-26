import cartReducer, {
  addToCart,
  removeFromCart,
  clearCart,
  updateCartQuantity
} from '../cartSlice';
import { IMenuItem } from '../menuSlice';

describe('cartSlice', () => {
  const realItem: IMenuItem = {
    id: '52767',
    meal: 'Bakewell tart',
    category: 'Dessert',
    instructions: 'To make the pastry...',
    img: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
    price: 7.22
  };

  const initialState = { items: [] };

  it('Should return initial state', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('Should add item to cart', () => {
    const action = addToCart({ item: realItem, quantity: 1 });
    const state = cartReducer(initialState, action);
    expect(state.items).toHaveLength(1);
    expect(state.items[0].item.id).toBe('52767');
    expect(state.items[0].quantity).toBe(1);
  });

  it('Should increase quantity of existing item', () => {
    const state = { items: [{ item: realItem, quantity: 2 }] };
    const action = addToCart({ item: realItem, quantity: 3 });
    const updated = cartReducer(state, action);
    expect(updated.items[0].quantity).toBe(5);
  });

  it('Should remove item by id', () => {
    const state = { items: [{ item: realItem, quantity: 1 }] };
    const action = removeFromCart('52767');
    const updated = cartReducer(state, action);
    expect(updated.items).toHaveLength(0);
  });

  it('Should clear the cart', () => {
    const state = { items: [{ item: realItem, quantity: 2 }] };
    const action = clearCart();
    const updated = cartReducer(state, action);
    expect(updated.items).toHaveLength(0);
  });

  it('Should update item quantity', () => {
    const state = { items: [{ item: realItem, quantity: 2 }] };
    const action = updateCartQuantity({ id: '52767', quantity: 10 });
    const updated = cartReducer(state, action);
    expect(updated.items[0].quantity).toBe(10);
  });

  it('Should not update quantity if <= 0', () => {
    const state = { items: [{ item: realItem, quantity: 2 }] };
    const action = updateCartQuantity({ id: '52767', quantity: 0 });
    const updated = cartReducer(state, action);
    expect(updated.items[0].quantity).toBe(2);
  });
});
