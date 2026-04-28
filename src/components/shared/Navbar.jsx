import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Navbar = () => {
    const links = [
        { 
            link: '/',
            text: 'Home'
        },
        { 
            link: '/about-us',
            text: 'About'
        },
        { 
            link: '/career',
            text: 'Career'
        }
    ];
    return (
        <div className='container flex justify-between items-center '>
            <div></div>
           <ul className='flex justify-center items-center gap-2'>

            {
                links.map((link, index)=> (<NavLinks href={link.link} key={index}>{link.text}</NavLinks >))
            }

            {/* <Link href={'/'}><li>Home</li></Link>
            <Link href={'/about'}><li>About</li></Link>
            <Link href={'/creer'}><li>Creer</li></Link> */}

           </ul>
           <Link className='flex justify-center items-center gap-2' href={'/login'}><Image src={user} withd={60} height={60} alt='user logo' /><button className="btn btn-primary">login</button></Link>
        </div>
    );
};

export default Navbar;