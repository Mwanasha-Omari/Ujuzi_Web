'use client';  
import React, { useState } from 'react';  
import { IoMdNotificationsOutline } from "react-icons/io";  

type Question = {  
  question: string;  
  options: string[];  
  correctAnswer: string;  
};  

const questions: Question[] = [  
  {  
    question: "Which strategy best supports differentiated instruction?",  
    options: ["A) Same task for all.",
    "B) Varied tasks.",
    "C) Only lectures.",
     "D) Grouping by age"],  
    correctAnswer: "A) Varied tasks.",  
  },   
  {  
    question: " What is the purpose of formative assessment?",  
    options: ["A) End-of-term eval",
    "B) Ongoing feedback.",
    "C) Final grades.",
     "D) Standardized tests."],  
    correctAnswer: "A)Ongoing feedback.",  
  },    
  {  
    question: "How can a teacher promote student engagement?",  
    options: ["A) Strict lectures.",
    "B) Interactive activities.",
    "C) Minimize interaction.",
     "D) Textbook focus."],  
    correctAnswer: "A) Interactive activities.",  
  },   
];  

const ModuleTwo: React.FC = () => {  
  const [showMore, setShowMore] = useState(false);  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);  

  const handleToggleShowMore = () => {  
    setShowMore(!showMore);  
  };  

  const handleOptionSelect = (option: string) => {  
    setSelectedOption(option);  
  };  

  const renderQuestion = (question: Question, index: number) => (   
    <div key={index} className="mb-20">  
      <h4 className="text-lg">{`${index + 1}. ${question.question}`}</h4>  
      <div className="mt-12 border-dotted border-2 border-gray-300 rounded-lg p-4 w-96 ml-28">  
        {question.options.map((option: string, idx: number) => (   
          <button  
            key={idx}  
            onClick={() => handleOptionSelect(option)}  
            className={`block w-9/12 text-left px-3 py-2 mb-2 ml-11 bg-gray-200 rounded hover:bg-amber transition-colors ${selectedOption === option ? 'bg-amber' : ''}`}>  
            {option}  
          </button>  
        ))}  
      </div>  
    </div>  
  );  

  return (  
    <div className="flex h-screen bg-gray-100">  
      <div className="flex-1 p-8">  
        <div className="flex justify-between items-center mb-8">  
          <h1 className="text-2xl font-bold text-center">Assessments per modules</h1>  
          <div className="flex items-center space-x-4">  
            <IoMdNotificationsOutline size={24} className='text-white bg-primary-blue rounded-full w-10 h-10'/>  
          </div>  
        </div>  

        <div className="border-dotted border-2 border-gray-300 rounded-3xl p-6 max-w-2xl mx-auto space-y-6">  
          <h2 className="text-xl mb-4">Module Two</h2> 
          <h3 className="text-2xl font-bold text-primary-amber mb-2">Questions</h3>  

          <div className="max-h-96 overflow-y-auto"> 
            {showMore ? (  
              questions.map(renderQuestion)  
            ) : (  
              renderQuestion(questions[0], 0)  
            )}  
          </div>  

          <div  
            onClick={handleToggleShowMore}  
            className="cursor-pointer text-primary-blue font-medium text-lg">  
            {showMore ? 'View Less Questions' : 'View More Questions'}  
          </div>  

          {showMore && (  
            <div className="flex justify-center"> 
               <button  
                className="mt-4 px-6 py-2 bg-primary-blue text-white font-bold rounded-full hover:opacity-90 transition-colors">  
                Submit  
              </button>  
            </div>  
          )}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ModuleTwo;
