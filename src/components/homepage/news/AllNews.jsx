import Image from 'next/image';
import React from 'react';

const AllNews = ({news}) => {
    console.log(news)
    return (
        <div>
            <h1 className='font-bold text-2xl'>All news</h1>
            {
                news.map((n, index)=> 
                    <div key={index} className='flex gap-3 items-center mt-6'>
                        <Image src={n.author.img} width={40} height={40} alt='author image'></Image>
                        <div className=''>
                        <p >{n.author.name}</p>
                        <p>{n.author.published_date}</p>
                        </div>
                    </div>
                
            )
            }
        </div>
    );
};

export default AllNews;