import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-8 pb-0">
      <div className='flex justify-around flex-col border-solid border-2 border-b-0 border-black p-8 flex-grow'>
        <div>
          <h1  className='text-7xl flex-grow-2'>Hi, <br /> <span className='text-6xl'>I'm Daniel</span></h1>
          <hr className="my-3 h-0.5 border-t-0  bg-black opacity-0" />
          <span className='italic text-black text-xl'>Engineering Manager,</span> 
          <span className='italic text-black text-xl'> FullstackWeb Developer</span>
        </div>


        <div className="flex-grow-2 italic text-xl text-black">
          <span className='text-6xl bold text-black'>"</span>
          <br/>
          <span> <strong>Serving</strong>, <strong>scaling</strong> and <strong>mentoring</strong> engineering teams. Passionate about web development.</span>
          <br/>
          <span className='text-6xl bold text-black w-full text-right block'>"</span>
        </div>

        
        <button className='w-full bg-black text-yellow-100 py-4'>
          Let's Talk!
        </button>
      </div>

      <div className='border-dashed border-x-2 border-black w-full h-full text-center py-2 text-md'>
        Introduction
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
