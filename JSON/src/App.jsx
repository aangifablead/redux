import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './features/apiSlice';

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.apiData);
  console.log(items, 'itemsitems',status)
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData = (items || []).filter(item => {
    const name = item.name?.toLowerCase() || '';
    const email = item.email?.toLowerCase() || '';
    const search = searchTerm.toLowerCase();

    return name.includes(search) || email.includes(search);
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-bold text-slate-800">User Directory</h2>
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-100 text-slate-600 uppercase text-xs font-bold">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {status === 'loading' && <tr><td colSpan="4" className="text-center py-10">Loading data...</td></tr>}
              {filteredData.map((user) => (
                <tr key={user.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-700">{user.name}</td>
                  <td className="px-6 py-4 text-slate-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredData.length === 0 && status === 'succeeded' && (
          <div className="text-center py-10 text-gray-400">No matching users found.</div>
        )}
      </div>
    </div>
  );
}

export default App;