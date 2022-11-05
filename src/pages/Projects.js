import React from 'react'

const Projects = () => {
  return (
    <div className='px-[100px] pt-[90px] snap-start snap-always'>
        <label className='text-6xl'>Projects</label>
        <div class="grid gap-4 grid-cols-3 grid-rows-3 mt-[50px]">

            <div className='flex flex-col border-2 border-slate-600 text-left rounded-xl'>
                <label className='my-[10px] text-3xl px-[10px]'>Cerø</label>
                <label className='text-xl mb-[5px] px-[10px]'>A decentralised platform that allows employees to borrow loans against their future salaries within a particular lockin period and the repayment occurs automatically from their monthly salaries.</label>
                <a href="https://github.com/Ankush523/cerov01"><img src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="code" className='h-[50px] w-[50px] rounded-full'/></a>
            </div>

            <div className='flex flex-col border-2 border-slate-600 text-left rounded-xl'>
                <label className='my-[10px] text-3xl px-[10px]'>SuperStream</label>
                <label className='text-xl mb-[5px] px-[10px]'>A decentralised platform that allows users to stream their monthly recurring payments. Integrated with SuperFluid SDK streaming money has a simpler onboarding experience and a smoother payment experience.</label>
                <a href="https://github.com/Ankush523/SuperStream"><img src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="code" className='h-[50px] w-[50px] rounded-full'/></a>
            </div>

            <div className='flex flex-col border-2 border-slate-600 text-left rounded-xl'>
                <label className='my-[10px] text-3xl px-[10px]'>VoteChain</label>
                <label className='text-xl mb-[5px] px-[10px]'>A decentralised Voting platform that allows users to either register  as a voter or as a candidate.</label>
                <a href="https://github.com/Ankush523/votechain"><img src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="code" className='h-[50px] w-[50px] rounded-full'/></a>
            </div>

            <div className='flex flex-col border-2 border-slate-600 text-left rounded-xl'>
                <label className='my-[10px] text-3xl px-[10px]'>Cryptoverse</label>
                <label className='text-xl mb-[5px] px-[10px]'>The Project displays a Cryptocurrency Dashboard which helps to track/monitor the historical values and current prices of various tokens/coins by the user.</label>
                <a href="https://github.com/Ankush523/cryptoverse"><img src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="code" className='h-[50px] w-[50px] rounded-full'/></a>
            </div>

            <div className='flex flex-col border-2 border-slate-600 text-left rounded-xl'>
                <label className='my-[10px] text-3xl px-[10px]'>Event Logger</label>
                <label className='text-xl mb-[5px] px-[10px]'>The Project listens to the events emitted by a contract when transactions are done, the event details are listened by the sever and stored into a database(MongoDB) In the frontend, the data is fetched using the API making calls from the database and displayed.</label>
                <a href="https://github.com/Ankush523/search-engine"><img src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="code" className='h-[50px] w-[50px] rounded-full'/></a>
            </div>

            <div className='flex flex-col border-2 border-slate-600 text-left rounded-xl'>
                <label className='my-[10px] text-3xl px-[10px]'>Searchit</label>
                <label className='text-xl mb-[5px] px-[10px]'>A simple search engine which provides results from google based on the data searched through API fetching</label>
                <a href="https://github.com/Ankush523/search-engine"><img src="https://icon-library.com/images/icon-code/icon-code-0.jpg" alt="code" className='h-[50px] w-[50px] rounded-full'/></a>
            </div>

            
           
        </div>
    </div>
  )
}

export default Projects