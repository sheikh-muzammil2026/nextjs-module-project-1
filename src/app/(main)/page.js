
import { redirect } from "next/navigation";


export default async function Home() {

         const default_category_id = "01";
         redirect(`/news/${default_category_id}`)
  
}


/**
 * 1. category te click korle details page e cole zabe. sekhane params e id ache. 
 * 2. details page e all news er data show hobe category er id inuzayi.
 * 3. 
 * */ 