"use client";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type Module = {
  id: number;
  name: string;
  completed: boolean;
  questions: Question[];
};

const modules: Module[] = [
  {
    id: 1,
    name: "Module 1",
    completed: true,
    questions: [
      {
        question: "What is the main purpose of education?",
        options: [
          "A) Memorization of facts.",
          "B) Personal development.",
          "C) Passing exams.",
          "D) Following rules.",
        ],
        correctAnswer: "B) Personal development.",
      },
      {
        question: "What is a key aspect of active learning?",
        options: [
          "A) Passive listening.",
          "B) Student interaction.",
          "C) Rote memorization.",
          "D) Teacher lectures.",
        ],
        correctAnswer: "B) Student interaction.",
      },
      {
        question: "How can teachers foster critical thinking?",
        options: [
          "A) Encourage questioning.",
          "B) Provide answers.",
          "C) Focus on tests.",
          "D) Avoid discussion.",
        ],
        correctAnswer: "A) Encourage questioning.",
      },
    ],
  },
  {
    id: 2,
    name: "Module 2",
    completed: false,
    questions: [
      {
        question: "Which strategy best supports differentiated instruction?",
        options: [
          "A) Same task for all.",
          "B) Varied tasks.",
          "C) Only lectures.",
          "D) Grouping by age",
        ],
        correctAnswer: "B) Varied tasks.",
      },
      {
        question: "What is the purpose of formative assessment?",
        options: [
          "A) End-of-term eval",
          "B) Ongoing feedback.",
          "C) Final grades.",
          "D) Standardized tests.",
        ],
        correctAnswer: "B) Ongoing feedback.",
      },
      {
        question: "What type of task engages students the most?",
        options: [
          "A) Interactive tasks.",
          "B) Textbook reading.",
          "C) Memorization drills.",
          "D) Passive videos.",
        ],
        correctAnswer: "A) Interactive tasks.",
      },
    ],
  },
  {
    id: 3,
    name: "Module 3",
    completed: false,
    questions: [
      {
        question: "How can a teacher promote student engagement?",
        options: [
          "A) Strict lectures.",
          "B) Interactive activities.",
          "C) Minimize interaction.",
          "D) Textbook focus.",
        ],
        correctAnswer: "B) Interactive activities.",
      },
      {
        question: "What is the benefit of group discussions?",
        options: [
          "A) Foster collaboration.",
          "B) Encourage silence.",
          "C) Avoid diversity of ideas.",
          "D) Individual focus.",
        ],
        correctAnswer: "A) Foster collaboration.",
      },
      {
        question: "How can technology enhance learning?",
        options: [
          "A) Interactive learning apps.",
          "B) Limiting resources.",
          "C) Reducing engagement.",
          "D) Removing teacher input.",
        ],
        correctAnswer: "A) Interactive learning apps.",
      },
    ],
  },
];

const ModuleInterface: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module>(modules[0]);
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>([]);

  const handleModuleSelect = (module: Module) => {
    setSelectedModule(module);
    setSelectedOptions(new Array(module.questions.length).fill(null));
  };

  const handleOptionSelect = (questionIndex: number, option: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const renderQuestion = (question: Question, index: number) => (
    <div key={index} className="mb-20">
      <h4 className="text-lg">{`${index + 1}. ${question.question}`}</h4>
      <div className="mt-12 border-dotted border-2 border-gray-300 rounded-lg p-4 w-96 ml-28">
        {question.options.map((option, optionIndex) => (
          <button
            key={optionIndex}
            onClick={() => handleOptionSelect(index, option)}
            className={`block w-9/12 text-left px-3 py-2 mb-2 ml-11 rounded transition-colors
              ${selectedOptions[index] === option ? "bg-amber" : "bg-gray-200 hover:bg-amber"}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100" id="/Resource">
      <div className="ml-60 mt-40">
        <div className="space-y-2">
          {modules.map((module) => (
            <div key={module.id}>
              <button
                onClick={() => handleModuleSelect(module)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300
                  ${
                    selectedModule.name === module.name
                      ? "bg-blue-100 text-black text-xl font-bold scale-110"
                      : "bg-white text-gray-700 text-lg hover:bg-gray-50"
                  }`}>
                <span>{module.name}</span>
                {selectedModule.name === module.name && <FaCheck className="w-5 h-5 text-green" />}
              </button>
              {module.id < modules.length && <hr className="border-gray-200 my-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-center">Assessments per module</h1>
          <div className="flex items-center space-x-4">
            <IoMdNotificationsOutline size={24} className="text-white bg-[#18315b] rounded-full w-10 h-10" />
          </div>
        </div>

        <div className="border-dotted border-2 border-gray-300 rounded-3xl p-6 max-w-2xl mx-auto space-y-6">
          <h2 className="text-xl mb-4">{selectedModule.name}</h2>
          <h3 className="text-2xl font-bold text-[#FBBC05] mb-2">Questions</h3>

          <div className="max-h-96 overflow-y-auto">
            {selectedModule.questions.map(renderQuestion)}
          </div>

          <div className="flex justify-center">
            <a href="/Componentsfeature/Upload">
            <button className="mt-4 px-6 py-2 bg-[#18315b] text-white font-bold rounded-full hover:opacity-90 transition-colors">
              Submit
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleInterface;
