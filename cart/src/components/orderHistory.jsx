import { useSelector } from 'react-redux';

const OrderHistory = () => {
  // Access the history array from the user slice
  const history = useSelector((state) => state.user.history);

  return (
    <div className="history-container">
      <h2>Order History</h2>
      {history.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="history-list">
          {history.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">Order ID: {order.id}</span>
                <span className="order-date">{order.date}</span>
              </div>
              <ul className="order-items">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} — {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
              <div className="order-footer">
                <strong>Total Paid: ${order.total}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;