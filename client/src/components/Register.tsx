// Create a file named Signup.tsx

import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (input: string): boolean => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all the fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format. Please enter a valid email.');
      return;
    }
    try {
      if (true) {
        window.location.href = '/login';
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while processing your request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96 flex items-center flex-col">
        <h1 className="text-3xl font-bold mb-4 text-center underline">Invoice Generator</h1>
        <h1 className="text-xl font-semibold mb-4 text-center">Sign Up</h1>
        <div className="mb-4 w-72">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4 w-72">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4 w-72">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
        <button
          type="button"
          onClick={handleSignup}
          className="bg-[#0f172a] text-white px-4 py-2 rounded-md"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-black font-semibold hover:underline">Login here.</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
