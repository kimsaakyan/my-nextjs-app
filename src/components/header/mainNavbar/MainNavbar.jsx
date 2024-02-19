'use client';

import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import ProfileDropdown from './ProfileDropdown';
import MobileMenu from './MobileMenu';
import { CiSettings } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import Search from './Search';

const MainNavbar = () => {
    const session = useSession();

    const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
        useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const toggleDropdownVisibility = (item, toggle) => {
        switch (item) {
            case 'profileDropdown': {
                setIsProfileDropdownVisible(toggle);
                break;
            }
            case 'mobileMenu': {
                setIsMobileMenuVisible(toggle);
                break;
            }
            default:
                break;
        }
    };

    if (!session.data) {
        return null;
    }

    return (
        <nav className="bg-white border-b z-50  w-full fixed">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between ">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => {
                                toggleDropdownVisibility(
                                    'mobileMenu',
                                    !isMobileMenuVisible
                                );
                            }}
                        >
                            {isMobileMenuVisible ? (
                                <AiOutlineClose size={25} />
                            ) : (
                                <CiMenuBurger size={25} />
                            )}
                        </button>
                    </div>

					{/* logo */}
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="/logo.svg"
                                alt="Company's logo"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                        
						{/* search */}
                        <Search />

                        {/* Notification button */}
                        <button
                            type="button"
                            className="relative p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <IoIosNotificationsOutline size={25} />
                        </button>

                        {/* Settings button */}
                        <button
                            type="button"
                            className="relative p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <CiSettings size={25} />
                        </button>

                        {/* Profile */}
                        <div className="relative ml-3">
                            <button
                                type="button"
                                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={() =>
                                    toggleDropdownVisibility(
                                        'profileDropdown',
                                        !isProfileDropdownVisible
                                    )
                                }
                            >
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </button>

                            <ProfileDropdown
                                isProfileDropdownVisible={
                                    isProfileDropdownVisible
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*  Mobile menu */}
            <MobileMenu isMobileMenuVisible={isMobileMenuVisible} />
        </nav>
    );
};

export default MainNavbar;
