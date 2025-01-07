import React from 'react'

const Body = (props) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-900 text-zinc-300 max-w-7xl mx-auto">
      {props.children}
    </div>
  )
}
export default Body