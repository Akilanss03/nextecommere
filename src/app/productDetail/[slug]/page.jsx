"use client"

import axios from "axios"
import { number } from "framer-motion"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ProductDetail(){
    const { slug } = useParams()
    const id = Number(slug)
    const Router = useRouter()
    const [details, setDetails] = useState(null)
    const [main, setMain] =useState("")

   useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                const data = res.data.products.find((item) => item.id === id)
                setDetails(data)
            } catch (error) {
                console.log("error on fetching")
            }
        }
        fetchData()

    }, [])
    useEffect(() =>{
        if(details?.images?.length)
        {
            setMain(details.images[0])
        }
    },[details])
     if(!details) {
        return <>loading...</>
    }
    return(
        <>
        
        <div className="relative min-w-full h-screen flex flex-col bg-gradient-to-r from-slate-950 via-white/10 to-slate-950 bg-cover bg-center justify-center items-center">
        <div className="relaitve">
             <img
                        onClick={() => Router.back()}
                        className="text-white w-[3vw] font-semibold cursor-pointer transform translate-y-[3vw] translate-x-[40vw]" src={"/pngtree-back-arrow-backward-direction-previous-png-image_5198415.png"}/>
        </div>
             <div className="relative flex flex-row  gap-[7vw] bg-gradient-to-r from-slate-700 via-white/50  to-slate-700 rounded-2xl w-[75vw] sm:w-[65vw] md:w-[70vw] lg:w-[65vw] h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] transform translate-y-[3vw] ">
              
            
            <div className=" flex flex-col transform translate-x-[5vw] translate-y-[1vw] w-[55vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] h-[60vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]  bg-gray-700 justify-center items-center">
                <img className="w-[40vw] sm:w-[30vw] md:w-[35vw] lg:w-[25vw] h-[50vh] " src={main || ""}  /> 
              <div className="relative flex flex-row gap-[1vw] w-[7vw] h-[18vh] justify-center items-center">
              {details?.images.map((img,index) => (
                <img key={index}  className={` ${main === img ? "border border-black" : ""}`}  src={img || "" } onClick={() => setMain(img)} 
                />
            ))}  
            </div>  
            </div>
            <div className="relative flex flex-col gap-[1vw]  px-[1vw] py-[4vw] ">
                <p className="text-black text-sm sm:text-sm  md:text-base  lg:text-[1.5vw] font-bold ">{details.category}</p>
                <p className="text-black text-[2vw] sm:text-[1.5vw]  md:text-sm  lg:text-[2vw] font-bold">{details.title}</p>
            <p className="text-black text-[1.5vw] sm:text-[1.5vw] md:text-[2vw] lg:text-1xl min-h-[3.5rem] overflow-hidden font-semibold">{details.brand}</p>
            <p className="text-black text-1xl sm:text-[1.5vw] md:text-[2vw] lg:text-1xl font-semibold">${details.price}</p>
            <p className="text-black text-sm sm:text-[1.5vw] md:text-[vw] lg:text-1xl">SKU:{details.sku}</p>
            <p className="text-black text-1xl sm:text-[1.5vw] md:text-[2vw] lg:text-[1vw]">{details.availabilityStatus}</p>
            <button className="w-[20vw] bg-gradient-to-r from-neutral-800 via-white/30 to-neutral-800 transform hover:scale-110 transition-all cursor-pointer translate-y-[4vw] rounded-2xl" >ADD CART</button>
            
            </div>
            
        </div>
       
       
        </div>
        </>
    )
}