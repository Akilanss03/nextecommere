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
                        className="text-white w-[10vw] sm:w-[7vw] md:w-[6vw] lg:w-[3vw] font-semibold cursor-pointer transform translate-y-[-10vw] min-[300px]:max-[639px]:translate-y-[1vw] sm:translate-y-[2vw] md:translate-y-[2vw] lg:translate-y-[3vw] translate-x-[40vw]" src={"/pngtree-back-arrow-backward-direction-previous-png-image_5198415.png"}/>
        </div>
             <div className="relative flex flex-col sm:flex-row md:flex-row lg:flex-row  gap-[1vw] sm:gap-[4vw] md:gap-[4vw] lg:gap-[7vw] bg-gradient-to-r from-slate-700 via-white/50  to-slate-700 rounded-2xl w-[80vw] sm:w-[80vw] md:w-[70vw] lg:w-[65vw] h-[70vh] min-[500px]:max-[639px]:h-[75vh]  sm:h-[60vh] md:h-[70vh] lg:h-[80vh] transform translate-y-[3vw] justify-center items-center">
              
            
            <div className="relative flex flex-col transform translate-x-[0vw] sm:translate-x-[2vw] md:translate-x-[2vw] lg:translate-x-[3vw]  w-[60vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] h-[30vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]  bg-gray-700 justify-center items-center">
                <img className="w-[40vw] sm:w-[30vw] md:w-[35vw] lg:w-[25vw] h-[20vh] sm:h-[30vh] md:h-[45vh] lg:h-[50vh] " src={main || ""}  /> 
              <div className="relative flex flex-row gap-[1vw] w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[7vw] h-[18vh] justify-center items-center">
              {details?.images.map((img,index) => (
                <img key={index}  className={` ${main === img ? "border border-black" : ""}`}  src={img || "" } onClick={() => setMain(img)} 
                />
            ))}  
            </div>  
            </div>
            <div className="relative flex flex-col gap-[1vw] sm:gap-[1vw] md:gap-[] lg:gap-[1vw] px-[3vw] sm:px-[] md:px-[] lg:px-[1vw]  transform translate-y-[5vw] sm:translate-y-[-10vw] md:translate-y-[-10vw] lg:translate-y-[-8vw] ">
                <p className="text-black text-sm sm:text-sm  md:text-base  lg:text-[1.5vw] font-bold ">{details.category}</p>
                <p className="text-black text-sm sm:text-[2vw]  md:text-sm  lg:text-[2vw] font-bold">{details.title}</p>
            <p className="text-black text-sm min-[500px] sm:text-[2vw] md:text-[1.5vw] lg:text-1xl overflow-hidden font-semibold">{details.brand}</p>
            <p className="text-black text-sm sm:text-[2vw] md:text-[2vw] lg:text-[1.5vw] font-semibold">${details.price}</p>
            <p className="text-black text-sm sm:text-[2vw] md:text-[vw] lg:text-[1vw]">SKU:{details.sku}</p>
            <p className="text-black text-sm sm:text-[2vw] md:text-[2vw] lg:text-[1vw]">{details.availabilityStatus}</p>
            <button className="w-[70vw] sm:w-[20vw] md:w-[20vw] lg:w-[20vw] bg-gradient-to-r  from-neutral-800 via-white/30 to-neutral-800 transform hover:scale-110 transition-all cursor-pointer rounded-2xl" >ADD CART</button>
            
            </div>
            
        </div>
       
       
        </div>
        </>
    )
}