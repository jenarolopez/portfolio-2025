import { useState, useEffect } from 'react';

const Body = (props) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
  
  return (
    <div className='bg-slate-900 relative'>
      <div
        className='pointer-events-none fixed top-0 inset-0 z-30 transition duration-300 lg:absolute bg-red-100'
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}></div>
      <div
        className="flex flex-col lg:flex-row min-h-screen text-zinc-300 max-w-7xl mx-auto">
        {props.children}
      </div>
    </div>


  )
}
export default Body