import React from 'react'

const About = () => {
  return (
    <div className='px-[100px] my-[100px] snap-start snap-always'>
        <div className='flex flex-col text-left my-[100px]'>
        <label className='text-5xl'>I love to create</label>
        <label className='text-5xl'>something</label>
        <label className='text-5xl'>simple and useful</label>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <br/>
            <label className='text-6xl font-semibold mb-[40px]'>About Me</label>
            <br/>
            <label className='text-left text-2xl px-[250px]'>I am a lifelong learner with experience in Full Stack Development in Web2 and Web3. I am extremly passionate about writing code that has an impact and can bring ideas to life.In addition to development, I enjoy playing LoL, travelling, listening to music, reading fiction and helping communities and individuals.</label>
           
        </div>
    </div>
  )
}

export default About