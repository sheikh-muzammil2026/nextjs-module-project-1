import Link from 'next/link';
import React from 'react';

const NotFoundGlobal = () => {
    return (
        <div className='container mx-auto bg-base-300 p-20'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <p className='text-7xl font-bold'>404</p>
            {/* <div className="divider"></div> */}
            <h1 className='text-4xl font-bold text-center'>This page not found</h1>
            <Link href={'/'}><button className="btn btn-primary">Back to home</button></Link>
            </div>
        </div>
    );
};

export default NotFoundGlobal;