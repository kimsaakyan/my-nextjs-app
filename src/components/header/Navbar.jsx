'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },

    {
        id: 2,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 3,
        title: 'Blogs',
        url: '/blogs',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Dashboard',
        url: '/dashboard',
    },
];

const Navbar = () => {
    const session = useSession();
    console.log(session);

    if (!session.data) {
        return null;
    }

    return (
        <nav className="bg-white shadow-sm flex justify-between items-center p-2">
            <div className="flex space-x-4">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="text-[#777777] hover:bg-[#777777] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                            {link.title}
                        </Link>
                    );
                })}
            </div>
            <div>
                {session.data ? (
                    <button
                        onClick={() => signOut({ callbackUrl: '/signIn' })}
                        className="text-[#777777] hover:bg-[#777777] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        href="/signIn"
                        className="text-[#777777] hover:bg-[#777777] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
