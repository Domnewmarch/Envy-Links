// src/pages/register.js

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth } from '../firebase';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async e => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login'); // Redirect to login after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 border-gray-200 p-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border-2 border-gray-200 p-2 rounded" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
          Register
        </button>
      </form>
    </div>
  );
}
