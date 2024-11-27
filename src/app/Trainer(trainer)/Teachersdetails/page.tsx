'use client';

import Layout from "@/app/Layout/page";

const Teachers = () => {  
  const teacher = {
    name: 'Johnson Masafa',
    school: 'St.Kizito',
    subcounty: 'Jomvu',
  };

  return (
    <Layout>
      <div className="flex-1 mt-20" id="/teachers">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 text-center">
            <p className="text-lg font-bold">Name:</p>
            <p className="text-lg">{teacher.name}</p>
          </div>
          <div className="flex-1 text-center border-l border-[#FBBC05]">
            <p className="text-lg font-bold">School:</p>
            <p className="text-lg">{teacher.school}</p>
          </div>
          <div className="flex-1 text-center border-l border-[#FBBC05]">
            <p className="text-lg font-bold">Subcounty:</p>
            <p className="text-lg">{teacher.subcounty}</p>
          </div>
        </div>
        <h2 className="font-bold text-lg mb-4">Allocated teachers</h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">Trainer Name</th>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">TSC No.</th>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">Email</th>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">Sub-County</th>
            </tr>
          </thead>
          <tbody>
           <a href="/Teacherprogress">
           <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Dorcas Mwembe
              </td>
              <td className="py-2 px-4">003000</td>
              <td className="py-2 px-4">dorcas@gmail.com</td>
              <td className="py-2 px-4">Jomvu</td>
            </tr>
           </a>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Hajj Muhminah
              </td>
              <td className="py-2 px-4">003100</td>
              <td className="py-2 px-4">hajj@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Mbwana Musa
              </td>
              <td className="py-2 px-4">003200</td>
              <td className="py-2 px-4">musa@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Juma Hassan
              </td>
              <td className="py-2 px-4">034000</td>
              <td className="py-2 px-4">juma@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Dorcas Mwende
              </td>
              <td className="py-2 px-4">003500</td>
              <td className="py-2 px-4">dorcas@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Dian Chekoech
              </td>
              <td className="py-2 px-4">003600</td>
              <td className="py-2 px-4">diana@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Dorcas Mamu
              </td>
              <td className="py-2 px-4">003700</td>
              <td className="py-2 px-4">mamu@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Myra Kombo
              </td>
              <td className="py-2 px-4">003800</td>
              <td className="py-2 px-4">myra@gmail.com</td>
              <td className="py-2 px-4">Shimba Hills</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};  

export default Teachers;
