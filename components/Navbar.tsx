'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
    const [open,setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
  return (
    <>    <nav className='flex-center fixed top-0 z-50
     w-full border-b-2 border-black-200   bg-black-100 text-white py-7
     '>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6
        xs:px-8 sm:px-16' >
            <Link href="./">
                <div className='font-bold text-3xl '>Manav</div>
            </Link>
            <button onClick={handleClick}>
                <Image src="/hamburger-menu.svg" alt='search' width={30} height={30} 
                className="block md:hidden"/>
            </button>
            
          
           
            
            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10 '>
                 <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href="./">Home</Link>
                </li>

                <li>
                    <Link href="./about">About</Link>
                </li>
                <li className='body-text !font-normal'>
                    <Link href="./contact">MasterClass</Link>
                </li>
                <li>
                    <Link href="./blog">Blog</Link>
                 </li>
            </ul>
        </div>
     </nav>
     <div
        className={`fixed top-0  overflow-y-hidden left-0 w-full h-screen scroll-m-1 z-50 bg-black-100  transition duration-200 ease-in-out transform ${
          open? '-translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col   gap-5 text-xl items-center justify-center h-full text-white">
        <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href="./">Home</Link>
                </li>

                <li>
                    <Link href="./about">About</Link>
                </li>
                <li className='body-text !font-normal'>
                    <Link href="./contact">MasterClass</Link>
                </li>
                <li>
                    <Link href="./blog">Blog</Link>
                 </li>
        </ul>
      </div>
         </>

  )
}

export default Navbar