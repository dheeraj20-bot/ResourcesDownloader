import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Link from "next/link"
import Image from "next/image"


interface Props{
    id:string
    title:string
    image:string
    downloadNumber:string
    downloadLink:string
}

const ResourceCard = ({title,id,image,downloadLink,downloadNumber}:Props)=>{
    

    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:w-[356px]">
            <Link href={downloadLink} target="_blank">
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="h-fit w-full">
                    <Image 
                    alt={title}
                    src={image}
                    className="h-full rounded-md object-cover"
                    width={384}
                    height={440}
                    />
                </div>
    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left 
    ">{title}</CardTitle>
   
  </CardHeader>
  </Link>
  <CardContent className="flex-between mt-4 p-0">
    <div className="flex-center gap-1.5 body-medium text-white">
        <Image src="/downloads.svg" width={20} 
        height={20} alt="download"/>
        {`${downloadNumber}+`}
    </div>
<Link href={downloadLink} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
    Download Now 
    <Image src="/arrow-blue.svg" width={13} 
        height={10} alt="download"/>

</Link>
 
  </CardContent>
</Card>

    )
}

export default ResourceCard