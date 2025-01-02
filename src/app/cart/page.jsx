'use client';

import { useState } from 'react';

const page = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 150 },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [taxRate, setTaxRate] = useState(0.15); // Example tax rate (15%)

  // Handle item selection
  const handleItemSelect = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.some((selected) => selected.id === item.id)
        ? prevItems.filter((selected) => selected.id !== item.id)
        : [...prevItems, item]
    );
  };

  // Calculate the breakdown
  const calculateTotal = () => {
    const subtotal = selectedItems.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <div className="flex p-8 gap-5">
      {/* Left Section - Item List */}
      <div className="w-1/2 p-8 bg-gray-100 flex flex-col space-y-4 rounded-lg">
        <h2 className="text-2xl text-black font-semibold">Item List</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-4 bg-white text-black rounded-lg shadow-md cursor-pointer ${
                selectedItems.some((selected) => selected.id === item.id)
                  ? 'bg-green-100'
                  : ''
              }`}
              onClick={() => handleItemSelect(item)}
            >
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Total Amount */}
      <div className="w-1/2 p-8 bg-white flex flex-col justify-between rounded-lg">
        <h2 className="text-2xl text-black font-semibold mb-4">Total Amount</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-black">Subtotal</span>
            <span className="text-black">${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">Tax (15%)</span>
            <span className="text-black">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <span className="text-black">Total</span>
            <span className="text-black">${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default page;
