'use client';
import React from 'react';
import { HomeIcon, ClipboardIcon, BarChartIcon } from 'lucide-react';
import Link from 'next/link';  // Add this import
const AssessmentResults = () => {
  const handleRetake = () => {
    console.log('Retaking module assessment');
  
  };
  return (
    <div className="flex h-screen bg-white">
     
      {/* Main Content */}
      <div className="flex-1 flex justify-center items-start p-8">
        <div className="space-y-6 w-[500px]">
          {/* Module Cards */}
          {[
            { name: 'Module1', score: 82 },
            { name: 'Module2', score: 65 },
            { name: 'Module3', score: 30 }
          ].map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium">{module.name}</div>
                <div>
                  <div className="text-sm font-medium mb-1">Score</div>
                  <div className="text-yellow-400 text-xl font-semibold">
                    {module.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link href="/components/Retake">
            <button
              onClick={handleRetake}
              className="w-full bg-[#1A2F59] text-white py-2 rounded-lg hover:bg-[#2A4069] transition-colors"
            >
              Retake Module Assessment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AssessmentResults;