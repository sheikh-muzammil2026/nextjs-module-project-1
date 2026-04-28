import AllNews from '@/components/homepage/news/AllNews';
import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import React from 'react';



const categories = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json();
    return data;
}



    const newsCategoryByID = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const category = await res.json();
    return category.data;
}

const NewsDetailsPage = async({params}) => {
        const {id} = await params;
    // console.log(id);

        const {data} = await categories();
        const  { news_category } = data;
        // console.log(news_category);
 


    const news = await newsCategoryByID(id); 
    // params theke ze id niyechilam seta ekhane function er moddhe diye dilam. ebar ei id ke grohon korlo funtion and se onuzayi data niye aslo.
  console.log(news);

    return (
    <div className="grid grid-cols-12 gap-4 mt-5">
      <div className="col-span-3 " ><LeftSidebar  news_category={news_category} activeID={id} /></div>
      <div className="col-span-6"><AllNews news={news}  /></div>
      <div className="col-span-3 " > <RightSidebar /></div>
    </div>
    );
};

export default NewsDetailsPage;