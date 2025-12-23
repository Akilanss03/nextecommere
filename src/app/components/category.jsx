"use client"

import { use, useEffect, useRef, useState } from "react"
import axios from "axios"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
// import { useRouter } from "next/router"

gsap.registerPlugin(ScrollTrigger)
export default function CategoryPage() {
    const [category, setCategory] = useState()



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                const uniqueCategory = [...new Set(res.data.products.map((item) => (item.category)))]
                setCategory(uniqueCategory)
            } catch (error) {
                console.log("error on category")
            }
        }
        fetchData()
    }, [])
    


    return (
        <>
            <div id="category" className="relative min-w-full h-screen bg-cover bg-center overflow-x-hidden"
                style={{
                    backgroundImage: "url('/black-texture-background-fpdff5mtpqfcxlk8.jpg')"
                }}
            >
                <p  className="font-bold text-3xl sm:text-[1xl] md:text-[2xl] lg:text-[3xl] py-[2vw] px-[5vw]">CATEGORIES</p>
                <div  className="relative grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  gap-[2vw] sm:gap-[1vw] md:gap-[1vw] lg:gap-[2vw]  overflow-x-hidden py-[1vw] px-[1vw]  justify-center items-center">
                    {category?.map((item,i) => (
                        <div key={i} className="relative flex flex-col group w-[50vw] sm:w-[42vw] md:w-[30vw] lg:w-[22vw] h-[40vh] sm:h-[43vh] md:h-[45vh] lg:h-[70vh] bg-gradient-to-r from-grey-700 via-white to-transparent  items-center justify-center rounded-3xl hover:rounded-full duration-200 overflow-hidden ease-in-out "
                        >
                            <p className="text-black font-bold text-2xl">{item.toUpperCase()}</p>
                            <Link href={`/categories/${item}`} key={item.id} className="relative flex w-[12vw] sm:w-[10vw]  md:w-[10vw] lg:w-[8vw] h-[4vh]  sm:h-[3vh] md:h-[3vh] lg:h-[4vh] justify-center items-center border rounded-2xl border-black opacity-0 group-hover:opacity-100  transition-opacity duration-700 transform translate-y-[3vw]">
                                <p className="text-black  text-[10px] sm:text-[10px] md:text-[10px] lg:text-[1xl]">SHOP NOW</p>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}