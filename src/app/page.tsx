import ScrollButton from '@/components/scroll-button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='relative flex justify-around flex-col flex-grow'>
        <div className='relative'>
          <h1  className='text-7xl flex-grow-2'>Hi, <br /> <span className='text-6xl'>I&apos;m Daniel</span></h1>
          <hr className="my-3 h-0.5 border-t-0  bg-black opacity-0" />
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full text-center mx-auto top-0 right-0"
          src="/profile.jpeg" 
          alt="Next.js Logo"
          width={150}
          height={180}
          
        />
        <hr className="my-3 h-0.5 border-t-0  bg-black opacity-0" />
          <div className='italic text-black text-xl text-center'>Engineering Manager,</div> 
          <div className='italic text-black text-xl text-center'> Fullstack Web Developer</div>
        </div>

        <div className="flex-grow-2 italic text-xl text-black">
          <span className='text-6xl bold text-black'>&quot;</span>
          <br/>
          <span> <strong>Serving</strong>, <strong>scaling</strong> and <strong>mentoring </strong> 
          engineering teams. Passionate about web development.</span>
          <br/>
          <span className='text-6xl bold text-black w-full text-right block'>&quot;</span>
        </div>

        
        <button className='w-full bg-cta text-black rounded-md py-4'>
          Let&apos;s Talk!
        </button>
      </div>

      <ScrollButton link="/introduction" title="Skills" />
    </>
  )
}
