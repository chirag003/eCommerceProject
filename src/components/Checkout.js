import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    const response = await axios.post('/api/checkout', { user, cart });
    if (response.status === 200) {
      // Handle successful checkout
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
