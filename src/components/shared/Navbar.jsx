import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='container flex justify-between items-center '>
           <ul className='flex justify-center items-center gap-2'>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/about'}><li>About</li></Link>
            <Link href={'/creer'}><li>Creer</li></Link>
           </ul>
           <Link className='flex justify-center items-center gap-1' href={'/login'}><Image src={user} withd={40} height={40} alt='user logo' /><button className="btn btn-primary">
           
            login</button></Link>
        </div>
    );
};

export default Navbar;