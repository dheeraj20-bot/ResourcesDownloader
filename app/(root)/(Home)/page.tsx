import Filters from '@/components/Filters'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/action'
import React from 'react'
import ResourceCard from "@/components/ResourceCard"
import Header from '@/components/Header'
export const revalidate = 900

interface Props {
  searchParams: {[key:string]:string |undefined}
}

const page = async ({searchParams}:Props) => {

  const resources = await getResources({
    query:searchParams.query || '',
    category:searchParams.category || '',
    page:"1"
  })
  
 const resourcesPlayist = await getResourcesPlaylist()
  console.log(resourcesPlayist)
  return (
    <div>
      <main className='flex-center paddings mx-auto
      w-full max-w-screen-2xl flex-col'>
        <section className='nav-padding w-full'>
          <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl
          bg-banner bg-cover bg-center'>
            <h1 className='sm:heading1 heading2 mb-6  text-center'>Manav Coaching Resources</h1>
          </div>
          <SearchForm/>
          <Filters/>
          
          {(searchParams?.query || searchParams?.category) && (<section className='flex-center mt-6 w-full flex-col sm:mt-20'>
            <Header
            type="Resources"
            query={searchParams?.query || ''}
            category={searchParams?.category || '' }
            
            />
            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
              {resources?.length>0?(
                  resources.map((resource:any)=>(
                    <ResourceCard
                    key={resource._id}
                    title={resource.title}
                    id={resource._id}
                    image={resource.image}
                    downloadNumber={resource.views}
                    downloadLink={resource.downloadLink}
                    />

                  ))
              ):(<p className='body-regular text-white-400'>
                No Resources Found
              </p>)}

            </div>

          </section>)
          
          }
        </section>
        {resourcesPlayist.map((item:any)=>(
        <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading3 self-start text-white-800'>{item.title}</h1>
           <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start
           '>
            {item.resources?.length>0?(
                  resources.map((resource:any)=>(
                    <ResourceCard
                    key={resource._id}
                    title={resource.title}
                    id={resource._id}
                    image={resource.image}
                    downloadNumber={resource.views}
                    downloadLink={resource.downloadLink}
                    />
                  ))
              ):(<p className='body-regular text-white-400'>
                No Resources Found
              </p>)}


           </div>
        </section>
      ))}
      </main>
     
    </div>
  )
}

export default page