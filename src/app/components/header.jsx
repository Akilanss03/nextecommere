"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
// import { Router } from "next/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Header() {
    const [search ,setSearch] =useState("")
    const Router = useRouter()
    const handleSearch = (e) => {
        e.preventDefault()
        if(!search.trim()) return
        Router.push(`/product/${search}`)
    }

    return (
        <>
            <div className="absolute h-[6vw]  w-full z-99 flex flex-row gap-[6vw] sm:gap-[15vw]  md:gap-[16vw] lg:gap-[18vw] items-center">
                <img className="w-[8vw] sm:w-[6vw] md:w-[6vw] lg:w-[6vw]  h-[7vh] sm:h-[6vh] md:h-[6vh] lg:h-[6vh] transform translate-y-[-0.5vw]" src="/did_logo.png" alt="" />
                {/* <div className="absolute z-99 inset-0 bg-white w-[16vw] h-[10vh] translate-x-[70vw] transform opacity-0 transition-opacity duration-300 hover:opacity-100 "></div> */}
                <div className="relative flex flex-row gap-[2vw] bg-gradient-to-r from-black-700 via-white to-black-700 rounded-2xl shadow-2xl w-[150vw] sm:w-[100vw] md:w-[120vw] lg:w-[140vw] h-[3vh] sm:h-[3.5vh] md:h-[4vh] lg:h-[5vh] transform translate-x-[-2vw] justify-center items-center">
                    <form className="relative flex transform translate-y-[-1vw] cursor-text" onSubmit={handleSearch}>
                         <input className="absolute bg-grey-700 border  border-black/50  rounded-2xl w-[25vw] sm:w-[18vw] md:w-[20vw] lg:w-[25vw] h-[2vh] sm:h-[2.5vh] md:h-[2.5vh] lg:h-[4vh] transform translate-x-[-18vw] text-black placeholder:text-[1vw]" onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder=" 🔎 search" />
                    </form>
                   
                    <div className="reltive flex flex-row gap-[2vw] transform translate-x-[15vw] ">
                       <Link href={"/"} className="relative  inline-block cursor-pointer group "><span className="absolute bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 inset-0  h-[4.9vh] translate-y-[-0.3vw]  opacity-0  transform group-hover:opacity-100 duration-300 rounded-2xl shadow-2xl shadow-black "></span><span className="relative text-black text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] z-10">HOME</span></Link>
                    <a href={"/#category"} className="relative  inline-block whitespace-nowrap cursor-pointer group "><span className="absolute bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 inset-0 min-w-full  h-[4.9vh] translate-y-[-0.4vw]  opacity-0  transform group-hover:opacity-100 duration-300 rounded-2xl shadow-2xl shadow-black "></span><span className="relative text-black text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] z-10">CATEGORY</span></a>
                    <Link href={"/allProduct"} className="relative  inline-block whitespace-nowrap cursor-pointer group "><span className="absolute bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 inset-0 min-w-full  h-[4.9vh] translate-y-[-0.4vw]  opacity-0  transform group-hover:opacity-100 duration-300 rounded-2xl shadow-2xl shadow-black "></span><span className="relative text-black text-[1.5vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] z-10">PRODUCT</span></Link>
  
                    </div>
                   

                </div>
            </div>

        </>
    )
}