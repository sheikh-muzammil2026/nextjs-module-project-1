import Link from 'next/link';
import React from 'react';

const LeftSidebar =  ({news_category, activeID}) => {

    // console.log(typeof(news_category));
   

    return (
        <div className='space-y-2'>
            <h1 className='text-lg font-bold'>All Category</h1>
            <ul className='flex flex-col gap-3 mt-6'>
                {
                    news_category.map((category, index)=> (
                    <li 
                    key={index}
                     className={`text-center ${activeID === category.category_id && "text-purple-500 underline"}`}
                    >
                        <Link  
                        href={`/news/${category.category_id}`} 
                        className={'block bg-green-500 py-2 text-white font-bold'} >
                            
                            {category.category_name}
                            </Link></li>))
                }
               </ul>
        </div>
    );
};

export default LeftSidebar;

/**
 * click korbe category te . url e show korbe :id = href='/id'
 * url theke ze id asbe, seta onusare all news dekhabe = find()data.id = pathName
* */ 