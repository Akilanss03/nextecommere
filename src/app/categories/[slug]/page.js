"use client"

import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Categories() {
    const { slug } = useParams()
    const Router = useRouter()
    const splSlug = slug.replace("", "").toUpperCase()
    const [bycategories, setByCategories] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                const catProduct = res.data.products.filter((item) => item.category.replace("", "").toUpperCase() === splSlug)
                setByCategories(catProduct)
            } catch (error) {
                console.log("error on fetching")
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="relative min-w-full h-full bg-cover bg-center bg-gradient-to-r  py-[10vw] sm:py-[2vw] md:py-[2vw] lg:py-[1vw] from-slate-950 via-white/10 to-slate-950">
                 <div className="relative flex flex-col gap-[2vw] py-[7vw] px-[5vw] ">
                    <div>
                         <img
                        onClick={() => Router.back()}
                        className="text-white w-[10vw] sm:w-[7vw] md:w-[6vw] lg:w-[4vw] font-semibold cursor-pointer transform translate-y-[-10vw] min-[300px]:max-[639px]:translate-y-[7vw] sm:translate-y-[2vw] md:translate-y-[2vw] lg:translate-y-[3vw] translate-x-[80vw]" src={"/pngtree-back-arrow-backward-direction-previous-png-image_5198415.png"}/>
                        <p className="text-sm sm:text-[15px] md:text-[20px] lg:text-[30px] font-bold ">ALL PRODUCTS</p>

                    </div>
                    <div className="relative grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3  lg:grid-cols-4 gap-[4vw] justify-center items-center" >

                    {bycategories?.map((item) => (

                        <Link href={`/productDetail/${item.id}`} key={item.id} className="relative  flex flex-col  justify-center bg-white w-full sm:w-[28vw] md:w-[28vw] lg:w-[22vw] h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] gap-[2vw] rounded-2xl transform hover:scale-110 transition-all">
                            <img className="w-[40vw] sm:w-[26vw] md:w-[28vw] lg:w-[30vw]  h-[20vh] sm:h-[30vh] md:h-[30vh] lg:h-[40vh]" src={item.thumbnail} alt="" />
                            <p className="text-black text-[10px] sm:text-sm md:text-base lg:text-[1xl] px-[1vw] transform translate-y-[-1.5vw]">{item.title}</p>
                            <p className="text-black text-[10px] sm:text-sm md:text-base lg:text-[1xl]  px-[1vw] transform translate-y-[-1.5vw]">{item.brand}</p>
                            <p className="text-black text-[10px] sm:text-sm md:text-base lg:text-[1xl]  px-[1vw] transform translate-y-[-1.5vw]">${item.price}</p>
                        </Link>

                    ))}
                </div>

                </div>

            </div>
        </>
    )
}