import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between bg-gray-800 text-white p-4 w-full p-4">
            <div>
                <Link href="/" className="text-lg font-bold">
                    SkinDB
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/Collection" className="text-gray-300 hover:text-white">
                        Collection
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;