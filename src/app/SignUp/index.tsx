'use client'

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full h-full">
        <div
          className="w-1/2 bg-cover bg-center hidden lg:block"
          style={{
            backgroundImage: "url('/Images/SISU official.jpg')",
          }}>
          <div className="h-full w-full flex items-center justify-center bg-primary-blue bg-opacity-60">
            <h1 className="text-white text-4xl font-bold">Welcome to Ujuzi</h1>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="mt-1 px-3 py-2 bg-cream border border-grey rounded-md w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="mt-1 px-3 py-2 bg-cream border border-grey rounded-md w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="mt-1 px-3 py-2 bg-cream border border-grey rounded-md w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                KICD Number
              </label>
              <input
                type="text"
                placeholder="Enter KICD Number"
                className="mt-1 px-3 py-2 bg-cream border border-grey rounded-md w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Role
              </label>
              <select
                className="mt-1 px-3 py-2 bg-cream border border-grey rounded-md w-full">
                <option value="kicd">KICD Official</option>
                <option value="Facilitator">Facilitator</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full pr-10"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-blue text-white py-2 rounded-md font-semibold hover:bg-opacity-60"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
