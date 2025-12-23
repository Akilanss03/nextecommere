"use client"
import { useEffect, useState, useRef } from "react"
import gsap from "gsap"




export default function Hero() {
    const [current, setCurrent] = useState(0)
    const imageref = useRef()
    const textref = useRef()
    const images = [
        { img: "/download-nike-shoes-transparent-png-for-designing-projects-16.png" },
        { img: "/pngtree-liquid-foundation-makeup-beauty-splash-png-image_9099958.png" },
        { img: "headphones-hd-png-headphones-png-image-1005.png" },
        { img: "Brown-Hoodie-1024x1024.png" }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(imageref.current, {
                opacity: 0,
                y: -100,
                duration: 0.4,
                // ease:"power3.out",
                onComplete: setCurrent((prev) => (prev + 1) % images.length)
            }, [])
            gsap.fromTo(imageref.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1 }
            )
        }, 4000);
        return () => clearInterval(interval)
    })

    useEffect(() => {
        const load = gsap.context(() => {
            gsap.from(imageref.current, {
                opacity: 0,
                top: 1,
                y: -100,
                duration: 3,
                ease: "power3.out"
            })
        })
        return () => load.revert()
    }, [])



    useEffect(() => {
        const load = gsap.context(() => {
            gsap.from(textref.current, {
                opacity: 0,
                top: 1,
                y: 100,
                duration: 3,
                ease: "power3.out"
            })
        })
        return () => load.revert()
    }, [])

    return (

        <div className="relative min-w-full h-screen flex bg-center bg-cover justify-center items-center"
            style={{
                backgroundImage: "url('/black-texture-background-fpdff5mtpqfcxlk8.jpg')"
            }}
        >
            <div className="relative flex transform translate-x-[3vw] justify-center">
                <div
                    ref={imageref}
                    className="absolute flex z-999 transform translate-y-[2vw] sm:translate-y-[2vw] md:translate-y-[2vw] lg:translate-y-[2vw] w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[25vw]  ">
                    <img className=" min-w-full" src={images[current].img} alt="" />
                </div>
                <div
                    ref={textref}
                    className="relative flex  flex-col  justify-center items-center">
                    <p className="inline-block font-extrabold text-[18vw] sm:text-[15vw] md:text-[15vw] lg:text-[7vw]">THE ALL</p>
                    <p className="block font-extrabold transform text-[18vw] sm:text-[15vw] md:text-[15vw] lg:text-[7vw]">NEW</p>
                    <p className="block font-extrabold text-[18vw]  sm:text-[15vw] md:text-[15vw] lg:text-[7vw] text-transparent [-webkit-text-stroke:2px_white]">FASHION</p>
                </div>
            </div>


        </div>

    )
}