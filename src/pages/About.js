import React from 'react'

const About = () => {
  return (
    <div className='px-[100px] my-[100px] snap-start snap-always'>
        <div className='flex flex-col text-left my-[50px]'>
        <label className='text-5xl'>I love to create</label>
        <label className='text-5xl'>something</label>
        <label className='text-5xl'>simple and useful</label>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <br/>
            <label className='text-6xl font-semibold mb-[20px]'>About Me</label>
            <br/>
            <label className='text-left text-2xl px-[300px]'>Presently a sophomore at SRMIST, Chennai, am persuing Computer Science Engineering with specialization in AI ML at the same. I am a lifelong learner with experience in Full Stack Development in Web2 and Web3. I am extremly passionate about writing code that has an impact and can bring ideas to life.
            <br/>
            <br/>
            My tech skills includes C, C++, Python, HTML, Tailwind CSS, ReactJS, NodeJS, ExpressJS, MySQL, MongoDB, Solidity and Ethersjs.
            <br/>
            <br/>
            In addition to development, I enjoy playing LoL, travelling, listening to music, reading fiction and helping communities and individuals.</label>
            <a href="https://www.canva.com/design/DAFPPI0Iooo/1lnbjCXCaLnTBHHFj6OCpg/view?utm_content=DAFPPI0Iooo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><button className='my-[80px] text-2xl rounded-full px-[20px] py-[5px] border-2 border-white'>Resume</button></a>
        </div>
    </div>
  )
}

export default About