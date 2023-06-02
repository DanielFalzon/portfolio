import { FC } from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Url } from 'next/dist/shared/lib/router/router';

interface ScrollButtonProps {
    link: Url,
    title: String
}

const ScrollButton = ({link, title}:ScrollButtonProps) => {
    return (
        <div className='flex flex-row justify-start'>
            <Image
                src="/double-arrow.svg" 
                alt={"Scroll arrow"}
                width={25}
                height={25}
            />
            <Link className='w-full text-left my-6 text-md' href={ link }>{ title }</Link>
        </div>
    )
}

export default ScrollButton;