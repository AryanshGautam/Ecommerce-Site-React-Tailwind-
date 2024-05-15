import React from 'react'

function Footer() {

  return (
    
    <div className="bg-white py-24 sm:py-24">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Done by :-</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/images/Aryansh.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Aryansh Badyal</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600 cursor-default">Developer</p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/images/LinkedIn.png" alt=""/>
          <div>
            <a href='https://www.linkedin.com/in/aryansh-gautam-4789601b5/' target='_blank' className="text-base font-semibold leading-7 tracking-tight text-gray-900">LinkedIn</a>
            <p className="text-sm font-semibold leading-6 text-indigo-600"></p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/images/GitHub.jpg" alt=""/>
          <div>
            <a href='https://github.com/AryanshGautam' target='_blank' className="text-base font-semibold leading-7 tracking-tight text-gray-900">Git-Hub</a>
            <p className="text-sm font-semibold leading-6 text-indigo-600"></p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/images/Gmail.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Gmail</h3>
            <a className="text-sm font-semibold leading-6 text-indigo-600 cursor-pointer" href="mailto:aryanshgautam8@gmail.com?subject=Type your Subject here">Contact me via email</a>

          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src="/images/X.jpeg" alt=""/>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">X</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600"></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Footer