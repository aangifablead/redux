import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask, editTask } from './features/todoSlice';

function App() {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null); 

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const trimmedInput = input.trim();
  console.log(trimmedInput,'trimmedInput',input)
  const isDuplicate = todos.some(
    (todo) => todo.text.toLowerCase() === trimmedInput.toLowerCase() && todo.id !== editId
  );

  console.log(isDuplicate,'isDuplicate')
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trimmedInput) return;

    if (isDuplicate) {
      alert("This task already exists!");
      return;
    }

    if (editId) {
      dispatch(editTask({ id: editId, newText: trimmedInput }));
      setEditId(null);
    } else {
      dispatch(addTask(trimmedInput));
    }

    setInput('');
  };

  const startEdit = (todo) => {
    setEditId(todo.id); 
    setInput(todo.text);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Redux Task Manager</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-8 border-t-4 border-blue-500">
        <h2 className="text-sm font-bold text-gray-400 uppercase mb-2">
          {editId ? "Editing Task..." : "Add New Task"}
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            className={`flex-1 border p-3 rounded-xl outline-none transition-all ${
              isDuplicate ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200 focus:ring-2 focus:ring-blue-500'
              }`}
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className={`${editId ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white px-6 py-2 rounded transition-colors`}
          >
            {editId ? 'Update' : 'Add'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => { setEditId(null); setInput(''); }}
              className="text-gray-500 underline text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Task List */}
      <div className="grid gap-4 w-full max-w-md">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center group">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTask(todo.id))}
                className="w-5 h-5 cursor-pointer"
              />
              <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {todo.text}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => startEdit(todo)}
                className="text-blue-500 hover:text-blue-700 font-medium text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(todo.id))}
                className="text-red-400 hover:text-red-600 font-medium text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;