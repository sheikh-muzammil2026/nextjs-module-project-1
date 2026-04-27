import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='container mx-auto flex justify-center items-center flex-col gap-2 py-10'>
           <Image src={logo} width={300} height={300} alt='header logo'/>
           <h1>Journalism without fear and fevaur</h1>
           <p>{format(new Date(), "EEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;