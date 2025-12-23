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
            <div className="relative min-w-full h-full bg-cover bg-center bg-gradient-to-r from-slate-950 via-white/10 to-slate-950">
                <div className="relative flex flex-col gap-[2vw] py-[7vw] px-[5vw] ">
                    <div className=" relative flex flex-row gap-[70vw]">
                        <p className="text-3xl font-bold">{splSlug}</p>

                        <img
                            onClick={() => Router.back()}
                            className=" w-[4vw]  cursor-pointer " src={"/pngtree-back-arrow-backward-direction-previous-png-image_5198415.png"} />
                    </div>
                    <div className="relative grid grid-cols-4 gap-[4vw] justify-center items-center">
                        {bycategories?.map((item) => (
                            <Link href={`/productDetail/${item.id}`} key={item.id} className="relative  flex flex-col justify-center bg-white w-[22vw] h-[60vh] gap-[1vw] rounded-2xl transform hover:scale-110 transition-all">
                                <img className="w-[20vw] h-[50vh]" src={item.thumbnail} alt="" />
                                <p className="text-black text-1xl px-[1vw] transform translate-y-[-1.5vw]">{item.title}</p>
                                <p className="text-black text-1xl px-[1vw] transform translate-y-[-1.5vw]">{item.brand}</p>
                                <p className="text-black text-1xl px-[1vw] transform translate-y-[-1.5vw]">${item.price}</p>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}