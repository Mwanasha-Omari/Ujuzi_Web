"use client";
import { useState } from "react";
import Layout from "../../Layout/layout";
import Link from "next/link"; 

export default function Dashboard() {
  const [teachers] = useState([
    {
      name: "Dorcas Mwembe",
      tsc: "003000",
      email: "dorcas@gmail.com",
      location: "Shimba Hills",
      school: "St. Kizito Secondary",
      tests: 3,
    },
    {
      name: "Haji Muhminah",
      tsc: "003100",
      email: "haji@gmail.com",
      location: "Shimba Hills",
      school: "St. Lucia Secondary",
      tests: 2,
    },
    {
      name: "Mbwana Musa",
      tsc: "003200",
      email: "musa@gmail.com",
      location: "Shimba Hills",
      school: "St. Lucia Secondary",
      tests: 2,
    },
    {
      name: "Juma Hassan",
      tsc: "034000",
      email: "juma@gmail.com",
      location: "Shimba Hills",
      school: "St. Lucia Secondary",
      tests: 2,
    },
    {
      name: "Dorcas Mwende",
      tsc: "003500",
      email: "dorcas2@gmail.com",
      location: "Shimba Hills",
      school: "St. Kizito Secondary",
      tests: 2,
    },
    {
      name: "Diane Chekoech",
      tsc: "003600",
      email: "dian@gmail.com",
      location: "Shimba Hills",
      school: "St. Kizito Secondary",
      tests: 2,
    },
    {
      name: "Dorcas Mamu",
      tsc: "003700",
      email: "mamu@gmail.com",
      location: "Shimba Hills",
      school: "St. Kizito Secondary",
      tests: 2,
    },
    {
      name: "Myra Mwankombo",
      tsc: "003800",
      email: "myra@gmail.com",
      location: "Shimba Hills",
      school: "St. Kizito Secondary",
      tests: 2,
    },
    {
      name: "Mary Otieno",
      tsc: "003900",
      email: "mary@gmail.com",
      location: "Shimba Hills",
      school: "Mvita Secondary",
      tests: 3,
    },
    {
      name: "Mupa Mjape",
      tsc: "004000",
      email: "mupa@gmail.com",
      location: "Shimba Hills",
      school: "Shah Secondary",
      tests: 3,
    },
  ]);

  return (
    <Layout>
      <div className="flex h-screen justify-center items-center">
        <div className="w-3/4 p-8">
          <div className="flex items-center space-x-2 mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="p-2 bg-gray-100 border rounded-md hover:bg-gray-200">
              🔍
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    Teacher Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    TSC No.
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">Email</th>
                  <th className="px-4 py-2 border-b border-gray-300">
                    Location
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300">School</th>
                  <th className="px-4 py-2 border-b border-gray-300">Tests</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-300">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                    <Link
                        href={`/Kicdofficial/kicd/teach/${teacher.tsc}`} 
                        className="hover:underline"
                      >
                        {teacher.name}
                      </Link>

                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {teacher.tsc}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {teacher.email}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {teacher.location}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {teacher.school}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      {teacher.tests}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
