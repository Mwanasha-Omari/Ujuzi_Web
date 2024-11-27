"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, FilePlus, Users2, ClipboardList, UserCheck } from 'lucide-react';
import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>(''); 
  const pathname = usePathname(); 

  useEffect(() => {
    const id = getCookie('userId') as string | null;
    setUserId(id || null);
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className="w-64 h-screen bg-[#1A315B] text-white flex flex-col">
      <div className="p-6 mb-8">
        <div className="flex items-center mb-2 mt-7 ml-5">
          <Image
            src="/Images/Ujuzilogo.png"
            width={160}
            height={40}
            alt="Ujuzi Logo"
            className="mr-2"
          />
        </div>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-10 ml-6">
          {[
            { name: 'Home', icon: LayoutDashboard, href: '/Kicdofficial(kicd)/landingpage' },
            { name: 'Upload', icon: FilePlus, href: '/Kicdofficial(kicd)/Upload' },
            { name: 'Teachers', icon: Users2, href: '/Kicdofficial(kicd)/teacher' },
            { name: 'Assessment', icon: ClipboardList, href: '/Kicdofficial(kicd)/Module' },
            { name: 'Trainers', icon: UserCheck, href: '/Kicdofficial(kicd)/trainer' },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setActiveLink(item.href)} 
                className={`flex items-center px-6 py-3 ${
                  pathname === item.href ? 'text-white' : 'hover:text-[#FFC107] hover:text-xl'
                } transition-colors group`}
              >
                <item.icon className="mr-4 group-hover:text-[#FFC107]" size={24} />
                <span className="text-lg">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
