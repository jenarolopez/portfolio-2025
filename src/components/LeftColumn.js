import React, { useState } from 'react';

const LeftColumn = () => {

  const [selected, setSelected] = useState('About')  

  return (
    <div className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-1/3 lg:flex lg:flex-col lg:justify-between p-8">
      <div className="text-slate-100">
        <h1 className="text-4xl font-bold mb-4 mt-8">Jenaro Salvador Lopez</h1>
        <p className="text-xl">Full Stack Developer /</p>
        <p className="text-xl mb-5">Software Engineer</p>
        <p className="mt-4 max-w-xs leading-normal mb-8">I craft robust, scalable, and user-focused software solutions to elevate digital experiences.</p>
        <nav className="hidden lg:block">
          <ul className="space-y-4">
            {['About', 'Experience', 'Work', 'Contact'].map((item) => (
              <li key={item} >
                <div href={`#${item.toLowerCase()}`} className="text-slate-100 cursor-pointer">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mt-8 lg:mt-0 hidden lg:block">
        <p className="text-sm">© 2025 Jenaro Lopez. All rights reserved.</p>
      </div>
    </div>
  )
}

export default LeftColumn

