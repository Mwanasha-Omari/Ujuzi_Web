import React from 'react';
import Image from 'next/image';
import { HomeIcon, ClipboardIcon, BarChartIcon } from 'lucide-react';
import Link from 'next/link';
const Retake = () => {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Main Content with Modal Overlay */}
      <div className="flex-1 relative">
        <div className="fixed inset-0 bg-gray-600/50 flex items-center justify-center p-4">
          <div className="relative bg-[#1A2F59] text-white p-8 rounded-lg shadow-xl max-w-md w-full border border-yellow-400">
            {/* Profile and Notification Icons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-500 overflow-hidden">
                <Image
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4 mt-6">
              You are below the pass mark,
            </h2>
            <p className="mb-6">
              please read the instructions below for the next step
            </p>
            <div className="mb-6 space-y-2 text-gray-300 italic">
              <p>1. Modules performed under the average, will have to be reworked</p>
              <p>2. Please work on the first and third question</p>
            </div>
            {/* Retake Button with Fixed Link */}
            <Link href="/Module">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1A2F59] font-bold py-2 px-6 rounded transition duration-300">
                RETAKE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Retake;