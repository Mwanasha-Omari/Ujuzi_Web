'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Teachergrades = () => {
  const teacher = {
    name: 'Dorcas Mwembe',
    school: 'St. Kizito Secondary',
    subcounty: 'Mvita',
    grades: { module1: 50, module2: 50, module3: 50 },
  };

  const data = {
    labels: ['Module 1', 'Module 2', 'Module 3'],
    datasets: [
      {
        data: [teacher.grades.module1, teacher.grades.module2, teacher.grades.module3],
        backgroundColor: ['#001f54', '#ffc107', '#f94144'],
        hoverBackgroundColor: ['#001f54', '#ffc107', '#f94144'],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-44">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 text-center">
          <p className="text-lg font-bold">Name:</p>
          <p className="text-lg">{teacher.name}</p>
        </div>
        <div className="flex-1 text-center border-l border-gray-300">
          <p className="text-lg font-bold">School:</p>
          <p className="text-lg">{teacher.school}</p>
        </div>
        <div className="flex-1 text-center border-l border-gray-300">
          <p className="text-lg font-bold">Subcounty:</p>
          <p className="text-lg">{teacher.subcounty}</p>
        </div>
      </div>

      <a href='/Progress'><h2 className="text-2xl font-bold mb-4 text-center">Grades per Module</h2></a>
      <p className="text-center italic text-gray-600 mb-4">Progress per Module</p>
      <div className="flex justify-center items-center">
        <div className="w-80 h-80">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Teachergrades;
