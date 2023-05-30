"use client"

import ScrollButton from '@/components/scroll-button'
import { IToolkitItem } from '@/types'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { toolKitItems, TYPES } from "@/data/toolkit";

interface PageProps {}

const sortSkills = (data:Array<IToolkitItem>) : Array<IToolkitItem> => {
    data.sort((a:IToolkitItem, b:IToolkitItem) => {
        const itemA = a.name.toUpperCase(); // ignore upper and lowercase
        const itemB = b.name.toUpperCase();
        if (itemA < itemB) {
           return -1;
         }
         if (itemA > itemB) {
           return 1;
         }
         return 0;
   })

   return data;
}

const Page: FC<PageProps> = ({}) => {
    const [skills, setSkills] = useState<IToolkitItem[]>([]);

    useEffect(() => {
        setSkills(sortSkills(toolKitItems));
    }, [])

    //Consider adding some kind of card per item (one row as a horizontal card per item)
    return (
        <main className='flex min-h-screen flex-col justify-between'>
            <ScrollButton link="/introduction" title="Introduction" />
            <div className="flex-grow p-8 flex flex-col justify-between">
                <h1 className="text-6xl flex-grow-2 mb-10">What I build with...</h1>
                <h2>Languages</h2>
                <div className="flex flex-row flex-wrap justify-center">
                    {skills.filter(item => item.type == TYPES.LANGUAGE).map(item => (
                        <Image
                            key={item.id}
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] m-2"
                            src={item.logo_url} 
                            alt={item.name + " Logo"}
                            width={80}
                            height={80}
                        />
                    ))}
                </div>
                <h2>Frameworks</h2>
                <div className="flex flex-row flex-wrap justify-center">
                    {skills.filter(item => item.type == TYPES.FRAMEWORK).map(item => (
                        <Image
                            key={item.id}
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] m-2"
                            src={item.logo_url} 
                            alt={item.name + " Logo"}
                            width={80}
                            height={80}
                        />
                    ))}
                </div>
                
            </div>
            
            <ScrollButton link="/contact" title="Contact" />
        </main>
    )
}

export default Page;