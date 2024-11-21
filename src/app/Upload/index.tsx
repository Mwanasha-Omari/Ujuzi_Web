'use client'
import React, { useState, useCallback } from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa";

interface FileItem {
  type: string;
  name: string;
  status: number;
  file: File;
}

const FileUpload = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const simulateFileUpload = async (index: number) => {
    const stages = [
      { target: 30, delay: 1200 },
      { target: 70, delay: 1200 },
      { target: 100, delay: 1200 }
    ];

    const updateProgress = (progress: number) => {
      setFiles(prev => prev.map((f, i) =>
        i === index ? { ...f, status: progress } : f
      ));
    };

    let currentProgress = 0;

    for (const stage of stages) {
      while (currentProgress < stage.target) {
        await new Promise(resolve => setTimeout(resolve, 50));
        currentProgress += 2;
        updateProgress(Math.min(currentProgress, stage.target));
      }
      await new Promise(resolve => setTimeout(resolve, stage.delay));
    }
  };

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const csvFiles = droppedFiles.filter(file => file.name.toLowerCase().endsWith('.csv'));

    const newFiles: FileItem[] = [];

    for (const file of csvFiles) {
      const isValid = await validateCsv(file);
      if (isValid) {
        newFiles.push({
          type: 'csv',
          name: file.name,
          status: 0,
          file: file
        });
        simulateFileUpload(newFiles.length - 1); 
      } else {
        alert(`File ${file.name} contains null values and cannot be uploaded.`);
      }
    }

    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const validateCsv = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const rows = text.split('\n').map(row => row.split(','));
        const hasNullValues = rows.some(row => row.includes(''));
        resolve(!hasNullValues); 
      };
      reader.onerror = () => resolve(false); 
      reader.readAsText(file);
    });
  };

  const handleDelete = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div 
        className={`border-2 border-dashed rounded-[30px] w-[800px] h-[350px] p-16 mt-20 text-center
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop} >
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
            <IoIosCloudUpload className="w-40 h-40 text-blue" />
          </div>
          <p className="text-gray-600 italic">Drag and drop</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full mt-32">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-medium">Type</th>
                <th className="text-left py-2 px-4 font-medium">Name</th>
                <th className="text-left py-2 px-4 font-medium">Status</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">
                    <div className="w-8 h-8 bg-green-50 rounded flex items-center justify-center">
                      <FaFileCsv className="w-6 h-6 text-primary-amber" />
                    </div>
                  </td>
                  <td className="py-2 px-4">{file.name}</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-amber h-2 rounded-full transition-all duration-200" 
                          style={{width: `${file.status}%`}}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{file.status}%</span>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleDelete(index)}
                      className="text-red hover:text-red-700">
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
