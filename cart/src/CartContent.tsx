import React, { useState, useEffect } from 'react';
import Login from './Login';

import { jwt, cart, clearCart } from './cart';
import { currency } from 'home/products';

export default function CartContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    return jwt.subscribe((val: any) => setItems(val?.cartItems ?? []));
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map((item: any) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right" id="grand_total">
          {currency.format(
            items.reduce((a, v: any) => a + v.quantity * v.price, 0)
          )}
        </div>
      </div>

      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button
              className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
