import React from "react";
import Layout from "../../Layout/layout";

const TeacherDashboard = () => {
  return (
    <Layout>
      <div className="flex h-screen bg-gray-100">
        <div className="flex-1 overflow-y-auto">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Name: Dorcas Mwembe
                </h1>
                <p className="mt-1 text-sm text-gray-600">Subcounty: Mvita</p>
              </div>
              <button className="p-2 rounded-full bg-navy-blue text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-2 gap-6">
                {/* Workshops */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Workshops
                    </h2>
                    <ul className="space-y-4">
                      {[
                        { id: 1, name: "Ujuzi wa Msingi", completed: true },
                        {
                          id: 2,
                          name: "Maendeleo ya Kitaaluma",
                          completed: true,
                        },
                        { id: 3, name: "Elimu Bora", completed: false },
                      ].map((module) => (
                        <li key={module.id} className="relative">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-500">
                              Module {module.id}:
                            </span>
                            {module.completed && (
                              <svg
                                className="w-5 h-5 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {module.name}
                          </p>
                          <div className="mt-2 h-1 w-full bg-yellow-400 rounded-full"></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Performance
                    </h2>
                    <div className="relative h-64 w-64 mx-auto">
                      <div className="absolute inset-0 flex items-center justify-center text-sm">
                        Module progress
                      </div>
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#002147"
                          strokeWidth="3"
                          strokeDasharray="75, 100"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="3"
                          strokeDasharray="20, 100"
                          strokeDashoffset="-75"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="3"
                          strokeDasharray="5, 100"
                          strokeDashoffset="-95"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 flex justify-center space-x-4">
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-navy-blue mr-2"></span>
                        <span className="text-sm text-gray-500">Module 1</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></span>
                        <span className="text-sm text-gray-500">Module 2</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                        <span className="text-sm text-gray-500">Module 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
