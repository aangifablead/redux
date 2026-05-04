import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';
import { addOrderToHistory } from '../features/userSlice';

const ShoppingCart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(addOrderToHistory({ items, total: totalAmount }));
    dispatch(clearCart());
    alert("Order Placed Successfully!");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : (
        <>
          <div className="cart-grid">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <h3>Total: ${totalAmount}</h3>
            <button className="btn-checkout" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};
export default ShoppingCart