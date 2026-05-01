import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './features/apiSlice';

function App() {
  const dispatch = useDispatch();
  const { item, status } = useSelector((state) => state.apiData);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(item, 'item')
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData = item.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-200">

        {/* Header & Search */}
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 bg-white">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-indigo-600">Live API Explorer</h1>
            <p className="text-slate-500 font-medium">Fetching 10 users from JSONPlaceholder</p>
          </div>
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full md:w-80 px-6 py-3 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Status Messaging */}
        {status === 'loading' && (
          <div className="p-20 text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-indigo-600 font-bold animate-pulse">Connecting to API...</p>
          </div>
        )}

        {status === 'failed' && (
          <div className="p-20 text-center text-rose-500 font-bold">
            ⚠️ Error: Could not connect to the dummy API.
          </div>
        )}

        {/* Table */}
        {status === 'succeeded' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[11px] uppercase tracking-[0.2em] font-black">
                  <th className="px-8 py-5">Name</th>
                  <th className="px-8 py-5">Email</th>
                  <th className="px-8 py-5">Company</th>
                  <th className="px-8 py-5">Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.map((user) => (
                  <tr key={user.id} className="hover:bg-indigo-50/50 transition-colors group">
                    <td className="px-8 py-5 font-bold text-slate-700">{user.name}</td>
                    <td className="px-8 py-5 text-slate-500">{user.email}</td>
                    <td className="px-8 py-5">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                        {user.company.name}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-indigo-500 hover:underline cursor-pointer font-medium">
                      {user.website}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;