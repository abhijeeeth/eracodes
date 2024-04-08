import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <>
    
    <div className='w-full h-96 bg-white text-white mt-6 rounded-2xl '>
    <div className='bg-white rounded'
    style={{
      backgroundImage: `url('https://c0.wallpaperflare.com/path/663/817/172/equipment-illustration-letter-message-cc65c03ea3420c540a2e5a994515f876.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '600px',
      // backgroundAttachment: 'fixed', 
    }}>
      <div className='pt-20'>
      <div className='p-8 flex items-center justify-center'>
        <h1 className='font-bold text-6xl whitespace-nowrap drop-shadow-2xl text-cyan-950'>School College Projects</h1>
      </div>  
      <div className='p-2 flex items-center justify-center'>
        <p className='drop-shadow-2xl text-amber-700 ml-10'>`Empowering tomorrow's leaders, one project at a time.`</p>        
      </div> 
        <div className='mx-96 px-10 pt-2 '>
         <div className=' bg-cyan-950/50 ml-10 m-4 p-2 flex items-center rounded-xl w-auto'>
            <AiOutlineSearch className='text-black w-12 font-extrabold'/>
            <input type="search"  className='focus:outline-none bg-transparent w-full text-blue-700 placeholder-cyan-100' placeholder='Search Any Project'></input>
            <button className="drop-shadow-lg bg-cyan-950 hover:bg-cyan-700  py-2 px-4 rounded-r-xl  text-cyan-100 h-8 flex items-center border-[1px]">
            Search
          </button>
        </div>
        </div>
    </div>
    </div>
    </div>
     </>
  )
}

export default Hero