import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth(); 

  const [formData, setFormData] = useState({
    email: 'admin@example.com',
    password: 'password123',
  });
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      // Call the login function from the AuthContext
      const user = await login({ email, password }); 
      
      if (user) {
        navigate('/'); // On success, navigate to the homepage
      }
    } catch (error) {
      console.error("Login failed:", error);
      // You can add logic here to show an error message to the user
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email" name="email" value={email} onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg" required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password" name="password" value={password} onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg" required
          />
        </div>
        <button type="submit" className="w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-slate-900">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;