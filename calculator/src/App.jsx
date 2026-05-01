import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateExpression, clear, calculateResult } from './features/calcSlice';

function App() {
  const expression = useSelector((state) => state.calculator.expression);
  const dispatch = useDispatch();

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  const handleClick = (val) => {
    if (val === '=') {
      dispatch(calculateResult());
    } else {
      dispatch(updateExpression(val));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-6">Calculator</h1>
        
        {/* Screen */}
        <div className="bg-gray-50 border border-gray-300 p-4 rounded-lg mb-6 text-right h-16 flex items-center justify-end overflow-hidden">
          <span className="text-2xl font-mono text-gray-700">{expression || "0"}</span>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              // Special styling for operators and the tall "+" button
              className={`h-14 rounded-lg font-bold text-white transition-all active:scale-95 ${
                btn === '=' ? 'bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
              } ${btn === '+' ? 'row-span-2 h-auto' : ''}`}
            >
              {btn}
            </button>
          ))}
          
          {/* Large Clear Button */}
          <button
            onClick={() => dispatch(clear())}
            className="col-span-3 h-14 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 active:scale-95"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;