import ModuleOne from "./Module1";
import ModuleTwo from "./Module2";
import ModuleThree from "./Module3";
import CBCResources from "./Resources";
import SignupForm from "./SignUp";
import Teachers from "./Teachers";
import Teaser from "./Teaser";
import FileUpload from "./Upload";



export default function Home() {
  return (
  <main>
  <ModuleOne/>
  <ModuleTwo/>
  <ModuleThree/>
  <Teaser/>
  <Teachers/>
  <SignupForm/>
  <CBCResources/>
  <FileUpload/>
  </main>

  );
}




// 'use client'
// import React from 'react';  
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';  
// // import Navigation from './Navigation/page';  
// // import Teaser from './Teaser/page';
// // import Module1 from './Module1/page';  
// // import Module2 from './Module2/page';  
// // import Module3 from './Module3/page';  
// // import Teachers from './Teachers/page';  
// // import Resources from './Resources/page';  
// // import FileUpload from './Upload/page';

// const App: React.FC = () => {  
//   return (  
//     <Router>  
//       <div className="flex">  
//         <div className="w-1/6 bg-primary-blue text-white p-4 h-screen">  
//           <Navigation />  
//         </div>  
//         <div className="w-3/4 p-4">  
//           <Routes>  
//             <Route path="/teaser" element={<Teaser/>}/>
//             <Route path="/module1" element={<Module1 />} />  
//             <Route path="/module2" element={<Module2 />} />  
//             <Route path="/module3" element={<Module3 />} />  
//             <Route path="/teachers" element={<Teachers />} />  
//             <Route path="/resources" element={<Resources />} />  
//             <Route path="/file" element={<FileUpload />} />  
//           </Routes>  
//         </div>  
//       </div>  
//     </Router>  
//   );  
// };  

// export default App;  







