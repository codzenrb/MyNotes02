import React from 'react'

const Background = () => {
  return (
    <>
    <div className="fixed top-0 background bg-zinc-900 w-full h-screen overflow-auto  ">
      <div className="nav absolute top-0 flex justify-center items-center w-full h-[10vh]  font-semibold text-zinc-700">
        <h5 className=''>By WebSight2</h5>
      </div>
      
      <h1 className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[60%] text-9xl text-zinc-700'>Notes.</h1>
    </div>
    </>
  )
}

export default Background