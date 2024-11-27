'use client'
const Teachers = () => {  
  return (
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="font-bold">Name:</div>
              <div className="ml-2">John Masafa</div>
            </div>
            <div className="border-l-2 border-primary-amber mx-4 h-6"></div>
            <div className="flex items-center">
              <div className="font-bold">Subcounty:</div>
              <div className="ml-12">Mvita</div>
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
              <tr>
                <td className="py-2 px-4 flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Dorcas Mwembe
                </td>
                <td className="py-2 px-4">003000</td>
                <td className="py-2 px-4">dorcas@gmail.com</td>
                <td className="py-2 px-4">Jomvu</td>
              </tr>
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
      );
};  
export default Teachers;

