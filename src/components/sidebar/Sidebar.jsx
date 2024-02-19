'use client';

import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiSimpleanalytics } from 'react-icons/si';
import { GrAnalytics } from 'react-icons/gr';
import { AiFillAppstore } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
    const session = useSession();
    const path = usePathname();

    const links = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: AiOutlineDashboard,
        },
        {
            id: 2,
            name: 'Modal Insights',
            path: '/dashboard/moda-insights',
            icon: SiSimpleanalytics,
        },
        {
            id: 3,
            name: 'Analytics',
            path: '/dashboard/analytics',
            icon: GrAnalytics,
        },
        {
            id: 4,
            name: 'Products',
            path: '/dashboard/products',
            icon: AiFillAppstore,
        },
    ];

    if (!session.data) {
        return null;
    }

    return (
        <aside className="w-60 border-r hidden md:flex md:flex-col sm:justify-between">
            <div className="flex flex-col fixed top-20 w-60">
                <ul className="flex flex-col gap-4 ml-4 w-54">
                    {links.map((link) => {
                        const isActiveLink = link.path === path;
                        return (
                            <li
                                key={link.id}
                                className={`${
                                    isActiveLink
                                        ? 'border-r-4 border-red-500'
                                        : null
                                } flex items-center gap-4 py-4`}
                            >
                                <link.icon
                                    size={20}
                                    color={`${isActiveLink ? 'red' : 'black'}`}
                                />
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button className="bg-red-500 text-white w-[145px] h-[45px] mx-auto uppercase fixed bottom-6 left-12">
                Add campaign
            </button>
        </aside>
    );
};

export default Sidebar;
