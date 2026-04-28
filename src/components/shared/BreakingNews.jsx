import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
   const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];


    return (
        <div className='flex justify-between px-3 bg-base-300 py-2 mb-4'>
            <button className="btn bg-pink-500 text-white">Letest news:</button>
            <Marquee pauseOnHover>
            {
                news.map((n)=> (
                    <span key={n._id}>{n.title}</span>
                ))
            }
            </Marquee>
        </div>
    );
};

export default BreakingNews;