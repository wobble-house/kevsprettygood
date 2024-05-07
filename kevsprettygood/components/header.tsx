"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    }
    return(
        <div className="flex justify-between max-w-4xl mx-auto p-4">
            <Link href={'/'}>
        <h1 className="text-left md:text-6xl font-bold pb-10">
          KEVSPRETTYGOOD
        </h1>
        </Link>

        <ul className={`${isOpen ? "visible": "invisible"}`}>
          <li>
            <Link href={'/paintings'} onClick={handleClick}>
            paintings
            </Link>
          </li>
          <li>
            <Link href={'/sculptures'} onClick={handleClick}>
            sculptures
            </Link>
          </li>          <li>
            <Link href={'/paper'} onClick={handleClick}>
            paper
            </Link>
          </li>          <li>
            <Link href={'/contact'} onClick={handleClick}>
            contact
            </Link>
          </li>          <li>
            <Link href={'/cv'} onClick={handleClick}>
            cv
            </Link>
          </li>
        </ul>

        <button onClick={handleClick} className="relative flex flex-col justify-start items-center">

        <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
        </span>  

        </button>

      </div>
    )
}