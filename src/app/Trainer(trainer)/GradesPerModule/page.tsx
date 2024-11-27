'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
const GradesPerModule = () => {
const data = [
{ name: 'Dorcas Mwembe', module1: 50, module2: 50, module3: 50, details: 'Dorcas is a Math teacher with 5 years of experience.' },
{ name: 'Lyne Waweru', module1: 90, module2: 90, module3: 90, details: 'Lyne is a Science teacher with a passion for experiments.' },
{ name: 'Israel Ngige', module1: 23, module2: 80, module3: 23, details: 'Israel teaches History and loves storytelling.' },
{ name: 'Masafa Johnson', module1: 46, module2: 80, module3: 46, details: 'Masafa is an English teacher with a focus on creative writing.' },
{ name: 'Lyne Waweru', module1: 92, module2: 58, module3: 92, details: 'Lyne specializes in Physics and Astronomy.' },
{ name: 'James Kemboi', module1: 70, module2: 55, module3: 70, details: 'James is a PE teacher who motivates students to stay active.' },
{ name: 'Esther Naisula', module1: 90, module2: 75, module3: 90, details: 'Esther is a Music teacher with a love for choir performances.' },
{ name: 'Masafa Johnson', module1: 88, module2: 44, module3: 88, details: 'Masafa also helps with student counseling.' },
{ name: 'Christine Wanjiku', module1: 92, module2: 60, module3: 92, details: 'Christine teaches Computer Science and coding basics.' },
{ name: 'Dorcas Mwembe', module1: 50, module2: 50, module3: 50, details: 'Dorcas is a Math teacher with 5 years of experience.' },
];
const [selectedTeacher, setSelectedTeacher] = useState<null | { name: string; details: string }>(null);
const router = useRouter(); 
const handleClick = (teacher: { name: string; details: string }, index: number) => {
if (index === 0) {
router.push('/Teacherprogress');
} else {
setSelectedTeacher(teacher);
}
};
return (
<div className="max-w-5xl mx-auto px-4 py-8">
<h1 className="text-2xl font-bold text-center mb-8">Grades Per Module</h1>
<table className="w-full border-collapse border border-gray-300 text-left">
<thead>
<tr className="bg-gray-100">
<th className="py-2 px-4 border-b border-gray-300 font-bold">Teacher's Name</th>
<th className="py-2 px-4 border-b border-gray-300 font-bold">Module 1</th>
<th className="py-2 px-4 border-b border-gray-300 font-bold">Module 2</th>
<th className="py-2 px-4 border-b border-gray-300 font-bold">Module 3</th>
</tr>
</thead>
<tbody>
{data.map((teacher, index) => (
<tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
<td className="py-2 px-4 border-b border-gray-300">
<button
onClick={() => handleClick({ name: teacher.name, details: teacher.details }, index)}
className="text-blue-600 hover:underline focus:outline-none text-left w-full">
{teacher.name}
</button>
</td>
<td className="py-2 px-4 border-b border-gray-300">{teacher.module1}</td>
<td className="py-2 px-4 border-b border-gray-300">{teacher.module2}</td>
<td className="py-2 px-4 border-b border-gray-300">{teacher.module3}</td>
</tr>
))}
</tbody>
</table>
{selectedTeacher && (
    <div className="mt-8 p-4 border border-gray-300 rounded bg-gray-50 shadow-md">
      <h2 className="text-xl font-bold">{selectedTeacher.name}</h2>
      <p className="mt-2 text-gray-700">{selectedTeacher.details}</p>
    </div>
  )}
</div>
);
};
export default GradesPerModule;