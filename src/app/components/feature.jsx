"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Featured() {
    const [newProducts, setNewProducts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                const featured = res.data.products.filter((products) => products.id >= 1 && products.id <= 15)
                setNewProducts(featured)
            } catch (err) {
                console.log("error found")
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="relative min-w-full h-full flex flex-col gap-[2vw] py-[7vw] px-[5vw] bg-cover bg-center bg-gradient-to-r from-slate-950 via-white/10 to-slate-950">

                <p className="text-sm sm:text-[15px] md:text-[20px] lg:text-[30px] font-bold ">FEATURED PRODUCTS</p>
                <div className="relative grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3  lg:grid-cols-4 gap-[4vw] justify-center items-center" >

                    {newProducts?.map((item) => (

                        <Link href={`/productDetail/${item.id}`} key={item.id} className="relative  flex flex-col  justify-center bg-white w-full sm:w-[28vw] md:w-[28vw] lg:w-[22vw] h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] gap-[2vw] rounded-2xl transform hover:scale-110 transition-all">
                            <img className="w-[40vw] sm:w-[26vw] md:w-[28vw] lg:w-[30vw]  h-[20vh] sm:h-[30vh] md:h-[30vh] lg:h-[40vh]" src={item.thumbnail} alt="" />
                            <p className="text-black text-[10px] sm:text-sm md:text-base lg:text-[1xl] px-[1vw] transform translate-y-[-1.5vw]">{item.title}</p>
                            <p className="text-black text-[10px] sm:text-sm md:text-base lg:text-[1xl]  px-[1vw] transform translate-y-[-1.5vw]">{item.brand}</p>
                            <p className="text-black text-[10px] sm:text-sm md:text-base lg:text-[1xl]  px-[1vw] transform translate-y-[-1.5vw]">${item.price}</p>
                        </Link>

                    ))}
                </div>

            </div>



        </>
    )
}