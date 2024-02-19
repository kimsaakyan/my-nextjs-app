'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const ProfileDropdown = ({ isProfileDropdownVisible }) => {
    return (
        <div
            className={`${
                isProfileDropdownVisible ? 'block' : 'hidden'
            } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
        >
            <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-sm text-gray-700 active:bg-gray-100"
            >
                Edit Profile
            </Link>

            <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 active:bg-gray-100"
                onClick={() => signOut({ callbackUrl: '/signIn' })}
            >
                Log out
            </a>
        </div>
    );
};

export default ProfileDropdown;
