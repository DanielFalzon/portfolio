import { FC } from 'react'
import Link from "next/link";
import { Url } from 'next/dist/shared/lib/router/router';

interface ScrollButtonProps {
    link: Url,
    title: String
}

const ScrollButton: FC<ScrollButtonProps> = ({link, title}) => {
    return (
        <div className='w-full text-center py-2 text-md'>
            <Link href={ link }>{ title }</Link>
        </div>
    )
}

export default ScrollButton;