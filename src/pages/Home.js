import React from 'react'

const Home = () => {
  return (
    <div className='px-[400px] m-[100px]'>
        <div className='flex flex-col justify-center items-center'>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQFppjPNkBEjpA/profile-displayphoto-shrink_400_400/0/1656403861773?e=1672876800&v=beta&t=IQBS3hUUp3UJbzDaejyAEnykntCQ1h43VvZ26CEvfeQ" alt="me" className='h-[200px] w-[200px] rounded-full '/>
            <label className='mt-[30px] text-3xl font-bold'>Hi, I'm Ankush</label>
            <label className='text-sm mt-[10px] text-gray-500'>Full-stack Web3 Developer</label>
            <label className='mt-[30px] text-6xl font-semibold'>Passionate</label>
            <label className='text-6xl font-semibold'>to craft amazing</label>
            <label className='text-6xl font-semibold'>digital product.</label>
        </div>
    </div>
  )
}

export default Home