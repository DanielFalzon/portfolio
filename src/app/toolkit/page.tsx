"use client"

import ScrollButton from '@/components/scroll-button'
import { ToolkitItem } from '@/types'
import { FC, useEffect } from 'react'
import Image from 'next/image'

import * as data from '@/data/toolkit.json';

interface PageProps {}

const page: FC<PageProps> = ({}) => {
    useEffect(() => {
        console.log(data as Array<ToolkitItem>);
    }, [])
    return (
        <main className='flex min-h-screen flex-col justify-between'>
            <ScrollButton link="/introduction" title="Introduction" />
            <div className="flex-grow p-8 flex flex-col justify-between">
                <h1 className="text-6xl flex-grow-2 mb-10">What I build with...</h1>
                <h2>Languages</h2>
                <div>
                    {data.sort((a, b) => {
                         const itemA = a.name.toUpperCase(); // ignore upper and lowercase
                         const itemB = b.name.toUpperCase();
                         if (itemA < itemB) {
                            return -1;
                          }
                          if (itemA > itemB) {
                            return 1;
                          }
                          return 0;
                    }).map(item => (
                        <div key={item.id}> {item.name }</div>
                    ))}
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full text-center mx-auto top-0 right-0"
                    src="/toolkit/csharp-logo.svg" 
                    alt="Next.js Logo"
                    width={150}
                    height={150}
                />

                </div>
            </div>
            
            <ScrollButton link="/contact" title="Contact" />
        </main>
    )
}

export default page