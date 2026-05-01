import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/api_integration';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Quotes</h1>
      {data && data.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
          <p>"{item.quote}"</p>
          <small>— {item.author}</small>
        </div>
      ))}
    </div>
  );
}
export default App