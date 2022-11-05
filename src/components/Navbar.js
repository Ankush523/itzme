import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between mx-[40px] '>
        <div>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/11/17/AD-initial-logo-design-AD-logo-Graphics-20338415-1-580x387.jpg" alt="initials" className='h-[60px] w-[90px]'/>
        </div>

        <div className='flex flex-row'>
            <label className='px-[20px] text-white'>Home</label>
            <label className='px-[20px] text-white'>About</label>
            <label className='px-[20px] text-white'>Projects</label>
            <label className='px-[20px] text-white'>Contact</label>
        </div>
        
        <div className='flex flex-row'>
            <a href="https://www.linkedin.com/in/ankush-dutta-920b5b202/"><img src="https://cdn-icons-png.flaticon.com/512/665/665212.png" alt="linkedin" className='h-[60px] w-[60px] '/></a>
            <a href="https://twitter.com/Ankush_523"><img src="https://cdn-icons-png.flaticon.com/512/665/665228.png" alt="twitter" className='h-[60px] w-[60px]'/></a>
        </div>
    </div>
  )
}

export default Navbar