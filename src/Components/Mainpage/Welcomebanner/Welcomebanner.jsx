import React from 'react'
import './Welcomebanner.css'

function Welcomebanner() {
  return (
    <>
      <div className='container'>
        <div className='textcontainer'>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">New styles are finally here</h1>
            <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
        </div>

        <div className='right'>
            <img src="/images/1.jpg" alt="" />
            <img src="/images/2.jpg" alt="" />
            <img src="/images/3.jpg" alt="" />
            <img src="/images/4.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Welcomebanner