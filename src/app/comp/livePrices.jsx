import React from 'react';

const IndicesCard = ({ title, value, change, percentage }) => {
  const isPositive = change > 0;

  return (
    <div className="flex flex-col items-center justify-center border rounded-xl p-4 shadow-md bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-105">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
      <div
        className={`flex items-center text-sm mt-2 font-medium ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {isPositive ? "⬆️" : "⬇️"}
        {isPositive ? '+' : ''}
        {change} ({percentage})
      </div>
    </div>
  );
};

const LivePrices = () => {
  const data = [
    { title: 'Gold', value: '23,722.35', change: 134.85, percentage: '0.57%' },
    { title: 'Silver', value: '78,509.81', change: 468.22, percentage: '0.60%' },
    {
      title: 'Platinum',
      value: '51,203.30',
      change: 444.10,
      percentage: '0.87%',
    },
    { title: 'Bronse', value: '23,700', change: 120.15, percentage: '0.51%' }
  ];

  return (
    <div className="w-[80%] mx-auto py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <IndicesCard
            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default LivePrices;
