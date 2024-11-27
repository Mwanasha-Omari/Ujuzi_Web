
"use client"
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Layout from '../Layout/page';
import Link from 'next/link';


const CreateAssessment = () => {
 const [selectedModule, setSelectedModule] = useState<number | null>(null);
 const [questions, setQuestions] = useState([
   { id: 1, text: 'What is the main purpose of education?' },
   { id: 2, text: 'What is a key aspect of active learning?' },
   { id: 3, text: 'How can teachers foster critical thinking?' },
 ]);
  // Fix the answers state to allow dynamic keys
 const [answers, setAnswers] = useState<{ [key: string]: string }>({});
 const [savedQuestions, setSavedQuestions] = useState<{ id: number; text: string }[] | null>(null);
 const [savedAnswers, setSavedAnswers] = useState<{ [key: string]: string } | null>(null);
 const [isEditing, setIsEditing] = useState(false);


 const handleAnswerChange = (questionId: number, value: string) => {
   setAnswers((prev) => ({
     ...prev,
     [`question${questionId}`]: value, // Use the dynamic key
   }));
 };


 const handleQuestionChange = (questionId: number, value: string) => {
   setQuestions((prev) =>
     prev.map((question) =>
       question.id === questionId ? { ...question, text: value } : question
     )
   );
 };


 const handleSave = () => {
   setSavedQuestions(questions); // Save the current questions
   setSavedAnswers(answers); // Save the current answers
   setIsEditing(false); // Exit editing mode
   alert('Questions and answers saved successfully!');
 };


 const handleEdit = () => {
   if (savedQuestions) {
     setQuestions(savedQuestions); // Load saved questions for editing
   }
   if (savedAnswers) {
     setAnswers(savedAnswers); // Load saved answers for editing
   }
   setIsEditing(true); // Enter editing mode
 };


 return (
   <Layout>
     <div className="flex h-screen">
       {/* Module Selection Panel */}
       <div className="w-64 border-r border-gray-200 bg-white">
         <div className="p-4">
           <h2 className="text-lg font-semibold mb-4">Modules</h2>
           <div className="space-y-3">
             {[1, 2].map((module) => (
               <button
                 key={module}
                 onClick={() => setSelectedModule(module)}
                 className={`w-full flex items-center justify-between p-3 rounded border ${
                   selectedModule === module
                     ? 'border-blue-500 bg-blue-50'
                     : 'border-gray-200'
                 }`}
               >
                 <span>Module {module}</span>
                 <ChevronRight size={20} className="text-gray-400" />
               </button>
             ))}


             {/* Module 3 button as a link */}
             <Link href="/assessments"> {/* Replace with the desired path */}
               <button
                 className={`w-full flex items-center justify-between p-3 rounded border ${
                   selectedModule === 3
                     ? 'border-blue-500 bg-blue-50'
                     : 'border-gray-200'
                 }`}
               >
                 <span>Module 3</span>
                 <ChevronRight size={20} className="text-gray-400" />
               </button>
             </Link>
           </div>
         </div>
       </div>


       {/* Main Content */}
       <div className="flex-1 p-8 bg-gray-50">
         <div className="max-w-3xl mx-auto">
           <h1 className="text-2xl font-semibold mb-6">Create Assessment</h1>


           {/* Questions */}
           <div className="bg-white rounded-lg shadow-sm p-6">
             <h2 className="text-lg font-semibold mb-6">QUESTIONS</h2>
             <div className="space-y-6">
               {questions.map((question) => (
                 <div key={question.id} className="space-y-2">
                   <div>
                     <label className="block font-medium">Question {question.id}</label>
                     <input
                       type="text"
                       value={question.text}
                       onChange={(e) =>
                         handleQuestionChange(question.id, e.target.value)
                       }
                       className="w-full p-2 border border-gray-200 rounded-md bg-gray-50"
                       disabled={!isEditing}
                     />
                   </div>
                   <textarea
                     value={answers[`question${question.id}`] || ''}
                     onChange={(e) =>
                       handleAnswerChange(question.id, e.target.value)
                     }
                     className="w-full p-2 border border-gray-200 rounded-md h-24 bg-gray-50"
                     placeholder="Type in answer..."
                     disabled={!isEditing}
                   />
                 </div>
               ))}
             </div>


             {/* Action Buttons */}
             <div className="flex justify-end space-x-4 mt-6">
               <button
                 className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
                 onClick={handleSave}
               >
                 Save
               </button>
               <button
                 className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50"
                 onClick={handleEdit}
               >
                 Edit
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </Layout>
 );
};


export default CreateAssessment;


