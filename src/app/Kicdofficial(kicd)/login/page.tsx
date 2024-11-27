"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

const UjuziLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      <div className="hidden md:flex md:w-1/2 relative">
        <Image
          src="/Images/ujuzicommunity.png"
          alt="Welcome to Ujuzi"
          layout="fill"
          objectFit="cover"
          
          
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-12 mb-[40%] text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Ujuzi</h1>
          <p className="text-lg">
            Login now and gain immediate access to exclusive content and expert trainers
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8">LOGIN</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full p-3 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full p-3 border border-gray-300 rounded bg-gray-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <Link href="/teacher">
              <button
                type="submit"
                className="w-full bg-blue-900 text-white p-3 rounded hover:bg-blue-800 transition duration-300"
              >
                LOGIN
              </button>
            </Link>
          </form>
          <p className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UjuziLogin;
