import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
           <h2>Login with</h2>
           <div className='flex flex-col gap-2 mt-4'>
            <button className="btn text-blue-500 border border-blue-500"><FaGoogle/> Login with Google</button>
            <button className="btn border border-black"><FaGithub/> Login with Github</button>
           </div>
        </div>
    );
};

export default RightSidebar;