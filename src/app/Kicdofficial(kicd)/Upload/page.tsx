'use client';
import React, { useState, useCallback } from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa";
import Layout from '@/app/Layout/page';

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

  const handleFileSelection = useCallback(async (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    const csvFiles = fileArray.filter(file => file.name.toLowerCase().endsWith('.csv'));

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

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileSelection(e.dataTransfer.files);
  }, [handleFileSelection]);

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
    <Layout>
        <div className="max-w-3xl mx-auto p-6" id='/upload'>
      <div 
        className={`border-2 border-dashed rounded-[30px] w-[800px] h-[350px] p-16 mt-20 text-center
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop} >
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40  flex items-center justify-center">
            <IoIosCloudUpload className="w-40 h-40 text-[#D3E1F1]" />
          </div>
          <p className="text-gray-600 italic">Drag and drop or select a file</p>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => handleFileSelection(e.target.files)}
            className="hidden" 
            id="file-input"
          />
          <label 
            htmlFor="file-input" 
            className="mt-4 px-6 py-2 bg-[#FBBC05] text-white rounded-md cursor-pointer hover:bg-[#FBBC05]">
            Select File
          </label>
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
                      <FaFileCsv className="w-6 h-6 text-[#FBBC05]" />
                    </div>
                  </td>
                  <td className="py-2 px-4">{file.name}</td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#FBBC05] h-2 rounded-full transition-all duration-200" 
                          style={{width: `${file.status}%`}}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{file.status}%</span>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleDelete(index)}
                      className="text-[#ED2D4D] hover:text-red-700">
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

    </Layout>
    );
};

export default FileUpload;
