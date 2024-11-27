"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Sidebar from '@/app/Kicdofficial(kicd)/sidebar/page';

const UjuziSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState(''); // State for the selected role
  const [numberLabel, setNumberLabel] = useState('KICD Number'); // Default label for number input

  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Handle role change and update the number label
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    // Dynamically change number label based on the role selected
    if (selectedRole === 'teacher') {
      setNumberLabel('Teacher Number');
    } else if (selectedRole === 'trainer') {
      setNumberLabel('Trainer Number');
    } else {
      setNumberLabel('KICD Number');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex md:w-1/2 relative">
        <Image
          src="/Images/ujuzicommunity.png"
          alt="Welcome to Ujuzi"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Ujuzi</h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center">SIGNUP</h2>
          <form>
            <div className="space-y-6">
              
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter first name"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter last name"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
                <select 
                  id="role" 
                  className="w-full p-3 border border-gray-300 rounded text-gray-400"
                  value={role} 
                  onChange={handleRoleChange}
                >
                  <option value="">Select Role</option>
                  <option value="kicd_official">KICD Official</option>
                  <option value="teacher">Teacher</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">{numberLabel}</label>
                <input
                  id="number"
                  type="text"
                  placeholder={`Enter ${numberLabel}`}
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('password')}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirmPassword')}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <Link href='/Kicdofficial(kicd)/Upload'>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-800 transition duration-300"
                >
                  SIGN UP
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UjuziSignup;
