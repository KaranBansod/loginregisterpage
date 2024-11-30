import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://loginregisterpage.onrender.com/register', registrationData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-blue-500">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Register to start your journey with us!
        </p>
        <form onSubmit={handleRegistrationSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={registrationData.username}
              onChange={handleRegistrationChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              value={registrationData.password}
              onChange={handleRegistrationChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already registered?{' '}
            <Link to="/login" className="text-green-900 font-bold hover:underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
