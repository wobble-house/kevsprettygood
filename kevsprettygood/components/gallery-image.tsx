'use client';
import Image from "next/image";
import { useState } from "react";

export default function GalleryImage({src, alt, height, width}:{src:string , alt:string, height:number, width:number}){
    const [isOpen, setIsOpen] = useState(false)
    const thumbHeight = height / 3
    const thumbWidth = width / 3
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    if (isOpen) return(
        <div className="fixed flex w-full h-full left-0 top-0 bg-black/75 justify-center items-center p-4">
            <button className={`relative`} onClick={handleClick}>
                <Image src={(src)} alt={alt} height={height} width={width}/>
            </button>
        </div>
    )
    else return (
        <button className={`w-full mx-auto justify-center items-center`} onClick={handleClick}>
            <Image src={src} alt={alt} height={thumbHeight} width={thumbWidth}/>
        </button>
    )
}