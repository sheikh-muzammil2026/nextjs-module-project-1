'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathName = usePathname();
    return (
        <Link href={href}
        className={`${pathName === href ? 'text-purple-500 underline' : ''}`}
        >{children}</Link>
    );
};

export default NavLinks;