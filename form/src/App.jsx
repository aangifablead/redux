import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from './features/formSlice';
import './App.css'; // Make sure to import the CSS!

function App() {
  const items = useSelector((state) => state.form.items);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Dynamic Form</h2>
      
      {items.length === 0 && (
        <p style={{ color: '#636e72', textAlign: 'center' }}>No items added. Click below to start.</p>
      )}

      {items.map((item, index) => (
        <div key={item.id} className="form-row">
          <input
            type="text"
            placeholder={`Enter item ${index + 1}...`}
            value={item.text}
            onChange={(e) => dispatch(updateItem({ id: item.id, text: e.target.value }))}
          />
          
          <button 
            className="btn-delete"
            onClick={() => dispatch(removeItem(item.id))}
            title="Delete Item"
          >
            ✕
          </button>
        </div>
      ))}

      <button className="btn-add" onClick={() => dispatch(addItem())}>
        + Add New Field
      </button>

      <div className="debug-box">
        <span style={{ color: '#fab1a0' }}>// Redux State Live View</span>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;