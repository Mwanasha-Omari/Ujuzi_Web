'use client';

import React, { useState, useEffect } from "react";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password:string;
  role: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/users/"); // Fetch users from the API
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data); // Update users state with fetched data
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        User List
      </h1>

      {/* Loading State */}
      {isLoading && <p className="text-center text-gray-600">Loading...</p>}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500 font-medium">Error: {error}</p>
      )}

      {/* Display User List */}
      {!isLoading && !error && (
        <table className="w-full text-left border-collapse border border-gray-300 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-4 border border-gray-300">
                  {user.first_name} {user.last_name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {user.email}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
