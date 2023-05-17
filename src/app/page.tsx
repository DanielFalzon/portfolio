import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between pb-0">
      <div className='relative flex justify-around flex-col  p-8 flex-grow'>
        <div className='relative'>
          <h1  className='text-7xl flex-grow-2'>Hi, <br /> <span className='text-6xl'>I'm Daniel</span></h1>
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
          <span className='text-6xl bold text-black'>"</span>
          <br/>
          <span> <strong>Serving</strong>, <strong>scaling</strong> and <strong>mentoring </strong> 
          engineering teams. Passionate about web development.</span>
          <br/>
          <span className='text-6xl bold text-black w-full text-right block'>"</span>
        </div>

        
        <button className='w-full bg-cta text-black rounded-md py-4'>
          Let's Talk!
        </button>
      </div>

      {/* Scroll indicator component */}
      <div className='w-full h-full text-center py-2 text-md'>
        <Link href="/introduction">Skills</Link>
      </div>

      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </main>
  )
}
