"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation" 
import { useParams } from "next/navigation"

export default function AllProducts() {
    const [newProducts, setNewProducts] = useState(null)
    const Router =useRouter()
    const { slug } = useParams()
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                const featured = res.data.products.filter((products) => products.id >= 1 && products.id <= 15)
                setNewProducts(res.data.products)
                console.log(featured, "100000101")
                console.log(res.data.products, "555555")
            } catch (err) {
                console.log("error found")
            }
        }
        fetchData()
    }, [AllProducts,])
    console.log(slug,"1111")
    return (
        <>
           <div className="relative min-w-full h-full bg-cover bg-center bg-gradient-to-r from-slate-950 via-white/10 to-slate-950">
                <div className="relative flex flex-col gap-[2vw] py-[7vw] px-[5vw] ">
                     <div>
                        <img
                        onClick={() => Router.back()}
                        className="relative text-white w-[2vw] font-semibold cursor-pointer transform translate-y-[2vw] translate-x-[80vw]" src={"/pngtree-back-arrow-backward-direction-previous-png-image_5198415.png"}/>
                                        <p className="text-3xl font-bold">FEATURED PRODUCTS</p>

                    </div>
                    <div className="relative grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3  lg:grid-cols-4 gap-[4vw] justify-center items-center" >

                        {newProducts?.map((item) => (

                            <Link href={`/productDetail/${item.id}`} key={item.id} className="relative  flex flex-col justify-center bg-white w-[43vw] sm:w-[28vw] md:w-[28vw] lg:w-[22vw] h-[60vh] sm:h-[65h] md:h-[50vh] lg:h-[60vh] gap-[1vw] rounded-2xl transform hover:scale-110 transition-all">
                                <img className="w-[38vw] sm:w-[26vw] md:w-[28vw] lg:w-[20vw]  h-[50vh]" src={item.thumbnail} alt="" />
                                <p className="text-black text-1xl sm:text-sm md:text-base lg:text-[1xl] px-[1vw] transform translate-y-[-1.5vw]">{item.title}</p>
                                <p className="text-black text-1xl sm:text-sm md:text-base lg:text-[1xl]  px-[1vw] transform translate-y-[-1.5vw]">{item.brand}</p>
                                <p className="text-black text-1xl sm:text-sm md:text-base lg:text-[1xl]  px-[1vw] transform translate-y-[-1.5vw]">${item.price}</p>
                            </Link>

                        ))}
                    </div>

                </div>

            </div>

        </>
    )
}