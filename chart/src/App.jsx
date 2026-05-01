import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './features/apiSlice';
import UserChart from './components/UserChart';

function App() {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.apiData);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // Format data for Recharts: Count users per city
    const chartData = useMemo(() => {
        const cityMap = {};
        items.forEach(user => {
            const city = user.address?.city || 'Unknown';
            cityMap[city] = (cityMap[city] || 0) + 1;
        });

        return Object.keys(cityMap).map(city => ({
            name: city,
            count: cityMap[city]
        }));
    }, [items]);

    return (
        <div className="min-h-screen bg-slate-50 p-10">
            <div className="max-w-5xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-4xl font-black text-slate-800">Analytics Dashboard</h1>
                    <p className="text-slate-500">Real-time user distribution from API</p>
                </header>

                {status === 'loading' && <p className="animate-pulse text-indigo-600 font-bold">Loading Data...</p>}
                
                {status === 'succeeded' && (
                    <>
                        <UserChart data={chartData} />
                        
                        {/* Your Table would go here */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                             <p className="text-slate-400 italic">Table data loaded: {items.length} users.</p>
                        </div>
                    </>
                )}

                {status === 'failed' && <p className="text-red-500">Error loading API data.</p>}
            </div>
        </div>
    );
}

export default App;