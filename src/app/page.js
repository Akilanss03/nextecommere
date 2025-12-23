
"use client"

import Hero from "./components/hero";
import CategoryPage from "./components/category";
import Featured from "./components/feature";
export default function Home() {

  return (
    
    <div className=" flex min-h-screen w-full flex-col">
      
   
      {/* <Header /> */}
      <Hero />
      <CategoryPage />
      <Featured />
      
    </div>
    
    
  )
}