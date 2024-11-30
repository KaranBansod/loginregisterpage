import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  //submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      const { success, message } = response.data;

      if (success) {
        console.log('Login Successfully');

      } else {
        console.log(message);
         <Link to="/" className="text-blue-900 font-bold hover:underline">
              Home
            </Link>
      }
    } catch (error) {
      console.error('Login error', error);
     
    }
    setLoginData({
        username: '',
        password: '',
      });


  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Login to your account to continue
        </p>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={loginData.username}
              onChange={handleLoginChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Not registered yet?{' '}
            <Link to="/Registration" className="text-blue-900 font-bold hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
