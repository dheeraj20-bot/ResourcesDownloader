"use client"
import React,{useState} from 'react'
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams,useRouter } from 'next/navigation'

const links = [
    "all",
    "Physics Class 12",
    "Chemistry Class 12",
    "Maths Class 12",
    "Biology Class 12",
    "Computer Science Class 12",
    "frontend",
    "backend",
    "fullstack"
]

const Filters = () => {
    const [active, setActive] = useState("all")
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleFilter =(link:string)=>{
        let newUrl = ""
        
        if(active===link){
            setActive("")
            newUrl = formUrlQuery({
                params:searchParams.toString(),
                keysToRemove:["category"],
                value:null
               })
        }else{
            setActive(link)
            newUrl =  formUrlQuery({
                params:searchParams.toString(),
                key:"category",
                value:link.toLowerCase()
               })
        }
         router.push(newUrl,{scroll:false})
    }
  return (
    <ul className=' text-white-800 no-scrollbar body-text flex max-w-full
    gap-2   py-12 sm:w-2xl  overflow-y-auto
    '>
         {
            links.map((link)=>(
                <button
                className={`${active===link?"gradient_blue-purple":""}
                 whitespace-nowrap bg-slate-800 shadow-lg shadow-slate-800/50 rounded-lg px-8 py-2.5 capitalize`}
                key={link}
                onClick={()=>handleFilter(link)}
                >
                    {link}

                </button>
            ))
         }
    </ul>
  )
}

export default Filters