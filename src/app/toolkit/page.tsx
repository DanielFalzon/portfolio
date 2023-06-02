"use client"

import ScrollButton from '@/components/scroll-button'
import { IToolkitItem } from '@/types'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { toolKitItems, TYPES } from "@/data/toolkit";
import ToolkitItemCard from '@/components/toolkit-item-card'

interface PageProps {}

const sortSkills = (data:Array<IToolkitItem>) : Array<IToolkitItem> => {
    data.sort((a:IToolkitItem, b:IToolkitItem) => {
        if (a.level < b.level) {
           return 1;
         }
         if (a.level > b.level) {
           return -1;
         }
         if(a.years < b.years){
            return 1;
         }
         if(a.years > b.years){
            return -1;
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
        <>
            <ScrollButton link="/introduction" title="Skills" />
            <div className="flex flex-col justify-between">
                <h1 className="text-6xl flex-grow-2 mb-6">What I build with...</h1>
                <h2 className='text-center text-md uppercase my-4'>Languages</h2>
                <div className="flex flex-col justify-center">
                    {skills.filter(item => item.type == TYPES.LANGUAGE).map(item => (
                        <ToolkitItemCard {...item} />
                    ))}
                </div>
                <h2 className='text-center text-md uppercase my-4'>Frameworks</h2>
                <div className="flex flex-col flex-wrap justify-center">
                    {skills.filter(item => item.type == TYPES.FRAMEWORK).map(item => (
                        <ToolkitItemCard {...item} />
                    ))}
                </div>
                
            </div>
            <ScrollButton link="/contact" title="Contact" />
        </>
    )
}

export default Page;