import Link from 'next/link';
import React from 'react';

const MobileMenu = ({ isMobileMenuVisible }) => {
    return (
        <div
            className={`${isMobileMenuVisible ? 'block' : 'hidden'} md:hidden shadow-md`}
        >
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                    href="/dashboard"
                    className="active:bg-red-500 text-gray-300 block rounded-md px-3 py-2 text-base font-medium"
                >
                    Dashboard
                </Link>
                <Link
                    href="/dashboard/moda-insights"
                    className="active:bg-red-500 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                    Moda Insights
                </Link>
                <Link
                    href="/dashboard/analytics"
                    className="active:bg-red-500 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                    Analytics
                </Link>
                <Link
                    href="/dashboard/products"
                    className="active:bg-red-500 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                    Products
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;
