import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex items-center gap-5 bg-indigo-900 p-4">
            <Link
                className="text-white hover:text-pink-300 transition-colors"
                href="/"
            >
                Home
            </Link>
            <Link
                className="text-white hover:text-pink-300 transition-colors"
                href="/contacts"
            >
                Contacts
            </Link>
        </div>
    );
};

export default Header;
